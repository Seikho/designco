var NavController = (function () {
    function NavController() {
        var _this = this;
        this.menuItems = [
            { title: "Screens", view: "screen" },
            { title: "Banners", view: "banner" },
            { title: "Vehicles", view: "vehicle" },
            { title: "Print", view: "print" },
            { title: "Fabricated", view: "fabricate" },
            { title: "Traditional", view: "traditional" }
        ];
        this.currentView = this.menuItems[0];
        this.changeView = function (newView) {
            _this.currentView = newView;
        };
    }
    return NavController;
})();
exports.NavController = NavController;
//# sourceMappingURL=controller.js.map