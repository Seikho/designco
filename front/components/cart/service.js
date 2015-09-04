function CartService($http) {
    var self = this;
    self.orders = [];
    self.go = function () {
        return $http.get('/orders')
            .then(function (o) { return self.orders = o.data; }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return console.log(args);
        });
    };
    self.go();
    return self;
}
module.exports = CartService;
//# sourceMappingURL=service.js.map