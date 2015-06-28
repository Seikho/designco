export class CartService {
    constructor() {
        //TODO: This needs to be retrieved from localStorage or is lost on refresh
        //TODO: Remove seed data.
        this.cartItems = [{
            id: 1,
            name: "Sample Item",
            quantity: 5
        }];
    }
}
