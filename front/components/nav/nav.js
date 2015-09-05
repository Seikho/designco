var ko = require("knockout");
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
        this.routeClass = function (route) {
            var current = _this.currentView();
            return current.route === route.route
                ? "active"
                : "";
        };
    }
    return NavViewModel;
})();
module.exports = NavViewModel;
//# sourceMappingURL=nav.js.map