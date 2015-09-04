export = CartService;

function CartService($http) {
    var self: { go: () => Promise<any>, orders: any[] } = this;
    self.orders = [];

    self.go = () => {       
        return $http.get('/orders')
            .then(o => self.orders = o.data,
                (...args) => console.log(args));
    }
    self.go();

    return self;
}