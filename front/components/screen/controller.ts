export class ScreenController {
    constructor(cart) {
        this.cart = cart;
        this.orders = cart.orders; // not updating

        //TODO: Seed this from API        
    }
    
    cart: App.CartService;
    orders: Array<any> = [];

    getOrders = () => {
        console.log(this.cart.orders);
        this.orders = this.cart.orders;
    }

    screens = [
        { id: 1, title: "Manager's special " },
        { id: 2, title: "4x4" },
        { id: 3, title: "Air Conditioning" },
        { id: 4, title: "Turbo Diesel" },
        { id: 5, title: "Automatic" }
    ];
}