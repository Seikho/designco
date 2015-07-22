export class ScreenController {
    constructor(cart) {
        this.myList = cart.orders; // not updating
        this.getOrders = () => {
            console.log(cart.orders);
            this.myList = cart.orders;
        }
        
        // this.list2 = [];
        // cart.subscribe(o => this.list2.push(o[0]));
        
        //TODO: Seed this from API
        this.screens = [
            { id: 1, title: "Manager's special "},
            { id: 2, title: "4x4" },
            { id: 3, title: "Air Conditioning" },
            { id: 4, title: "Turbo Diesel" },
            { id: 5, title: "Automatic" }
        ];
        
    }
}
