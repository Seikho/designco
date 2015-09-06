import store = require("ls-storage");
import ko = require("knockout");

export var cartItems = ko.observableArray<App.CartItem>([]);

// Update the cart object in persistent storage on change
cartItems.subscribe(items => {
    //TODO: Consider storing cart in server-side persistent storage
    //TODO: Consider storing a session/cart id in the browser for retrieving/sharing carts
    store("designco-cart", items);
});

// Populate the cart on page load
var dummyItem: App.CartItem = {
    id: 1,
    cartItemId: 1,
    itemType: "Screen",
    description: "Manager's Special",
    itemState: 1,
    quantity: 1
}

cartItems(store("designco-cart") || [dummyItem]);

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
    newCartItem.quantity = quantity;

    cartItems.push(newCartItem);
}

export function removeItem(item: App.CartItem|number) {
    cartItems.remove(cartItem => {
        if (typeof item === "number") {
            return item === cartItem.cartItemId;
        } else {
            return cartItem.cartItemId === item.cartItemId;
        }
    })
}

function getNextId() {
    var max = cartItems()
        .reduce((prev, curr) => curr.cartItemId > prev ? curr.cartItemId : prev, 0)

    return max + 1;
}