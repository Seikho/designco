var ko = require("knockout");
var xroads = require("crossroads");
var cart = require("../cart/service");
var ItemVM = require("../item/itemList");
var NavViewModel = (function () {
    function NavViewModel() {
        var _this = this;
        this.menuItems = ko.observableArray([
            { title: "Screens", route: "/screen", itemType: "Screen" },
            { title: "Banners", route: "/banner", itemType: "Banner" },
            { title: "Vehicles", route: "/vehicle", itemType: "Vehicle" },
            { title: "Print", route: "/print", itemType: "Print" },
            { title: "Fabricated", route: "/fabricate", itemType: "Fabricate" },
            { title: "Traditional", route: "/traditional", itemType: "Traditional" }
        ]);
        this.currentView = ko.observable(this.menuItems()[0]);
        this.cartItems = cart.cartItems;
        this.cartItemCount = ko.computed(function () { return _this.cartItems().length; });
        this.showCartModal = ko.observable(false);
        this.itemsList = new ItemVM();
        this.loadRoute = function (route) {
            _this.currentView(route);
            history.pushState({}, "DesignCo Shop", route.route);
            _this.itemsList.itemType(route.itemType);
        };
        this.routeHandler = function (section) {
            console.log("Request: " + section);
            var routeItem = _this.menuItems().filter(function (mi) { return mi.route.slice(1) === section; })[0];
            if (!routeItem)
                return;
            _this.loadRoute(routeItem);
        };
        this.routeClass = function (route) {
            var current = _this.currentView();
            return current.route === route.route
                ? "active"
                : "";
        };
        xroads.addRoute("/{route}", this.routeHandler);
        xroads.parse(window.location.pathname);
    }
    return NavViewModel;
})();
module.exports = NavViewModel;
//# sourceMappingURL=nav.js.map