import store = require("ls-storage");
export var cartItems = ko.observableArray<App.CartItem>([]);

// Update the cart object in persistent storage on change
cartItems.subscribe(items => {
    store("designco-cart", items);
});

// Populate the cart on page load
cartItems(store("designco-cart") || []);

export function addItem(item: App.Item, quantity?: number): void {
    quantity = quantity || 1;

    var matchingItems = cartItems()
        .filter(cartItem => cartItem.id === item.id);

    if (matchingItems.length > 0) {
        var existing = matchingItems[0];
        existing.quantity += quantity;
        return;
    }

    var newCartItem = <App.CartItem>item;
    newCartItem.cartItemId = getNextId();
    
    cartItems.push(newCartItem);
}

function getNextId() {
    var max = cartItems()
        .reduce((prev, curr) => curr.cartItemId > prev ? curr.cartItemId : prev, 0)
   
    return max + 1;
}