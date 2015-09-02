var ScreenController = (function () {
    function ScreenController(cart) {
        var _this = this;
        this.orders = [];
        this.getOrders = function () {
            console.log(_this.cart.orders);
            _this.orders = _this.cart.orders;
        };
        this.screens = [
            { id: 1, title: "Manager's special " },
            { id: 2, title: "4x4" },
            { id: 3, title: "Air Conditioning" },
            { id: 4, title: "Turbo Diesel" },
            { id: 5, title: "Automatic" }
        ];
        this.cart = cart;
        this.orders = cart.orders; // not updating
        //TODO: Seed this from API        
    }
    return ScreenController;
})();
exports.ScreenController = ScreenController;
//# sourceMappingURL=controller.js.map