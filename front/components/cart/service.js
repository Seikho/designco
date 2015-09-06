var store = require("ls-storage");
var ko = require("knockout");
exports.cartItems = ko.observableArray([]);
// Update the cart object in persistent storage on change
exports.cartItems.subscribe(function (items) {
    //TODO: Consider storing cart in server-side persistent storage
    //TODO: Consider storing a session/cart id in the browser for retrieving/sharing carts
    store("designco-cart", items);
});
// Populate the cart on page load
var dummyItem = {
    id: 1,
    cartItemId: 1,
    itemType: "Screen",
    description: "Manager's Special",
    itemState: 1,
    quantity: 1
};
exports.cartItems(store("designco-cart") || [dummyItem]);
function addItem(item, quantity) {
    quantity = quantity || 1;
    var matchingItems = exports.cartItems()
        .filter(function (cartItem) { return cartItem.id === item.id; });
    if (matchingItems.length > 0) {
        var existing = matchingItems[0];
        existing.quantity += quantity;
        return;
    }
    var newCartItem = item;
    newCartItem.cartItemId = getNextId();
    newCartItem.quantity = quantity;
    exports.cartItems.push(newCartItem);
}
exports.addItem = addItem;
function removeItem(item) {
    exports.cartItems.remove(function (cartItem) {
        if (typeof item === "number") {
            return item === cartItem.cartItemId;
        }
        else {
            return cartItem.cartItemId === item.cartItemId;
        }
    });
}
exports.removeItem = removeItem;
function getNextId() {
    var max = exports.cartItems()
        .reduce(function (prev, curr) { return curr.cartItemId > prev ? curr.cartItemId : prev; }, 0);
    return max + 1;
}
//# sourceMappingURL=service.js.map