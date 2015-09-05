var ko = require("knockout");
var NavViewModel = (function () {
    function NavViewModel() {
        this.menuItems = ko.observableArray([
            { title: "Screens", route: "/screen" },
            { title: "Banners", route: "/banner" },
            { title: "Vehicles", route: "/vehicle" },
            { title: "Print", route: "/print" },
            { title: "Fabricated", route: "/fabricate" },
            { title: "Traditional", route: "/traditional" }
        ]);
        this.currentView = ko.observable(this.menuItems()[0]);
    }
    return NavViewModel;
})();
exports.NavViewModel = NavViewModel;
//# sourceMappingURL=controller.js.map