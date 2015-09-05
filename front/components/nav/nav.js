var ko = require("knockout");
var xroads = require("crossroads");
var NavViewModel = (function () {
    function NavViewModel() {
        var _this = this;
        this.menuItems = ko.observableArray([
            { title: "Screens", route: "/screen" },
            { title: "Banners", route: "/banner" },
            { title: "Vehicles", route: "/vehicle" },
            { title: "Print", route: "/print" },
            { title: "Fabricated", route: "/fabricate" },
            { title: "Traditional", route: "/traditional" }
        ]);
        this.currentView = ko.observable(this.menuItems()[0]);
        this.loadRoute = function (route) {
            _this.currentView(route);
            history.pushState({}, "DesignCo Shop", route.route);
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