export = CartService;

function CartService($http) {
    var self: { go: () => Promise<any>, orders: any[] } = this;
    self.orders = [];
    
    // self.subscribers = [];
    
    // self.subscribe = fn => self.subscribers.push(fn);
    
    // self.notifySubs = () => { 
    //     self.subscribers.forEach(fn => fn(self.orders));
    // }
    
    // self.goHandler = o => {
    //     self.orders = o.data;
    //     self.notifySubs();
    // }
    
    // setTimeout(() => {
    //     self.orders.pop();
    //     self.notifySubs();
    //     console.log("run");
    // }, 2000);

    self.go = () => {
        
        return $http.get('/orders')
            .then(o => self.orders = o.data,
                (...args) => console.log(args));
    }
    self.go();

    return self;
}