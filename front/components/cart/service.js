var store = require("ls-storage");
exports.cartItems = ko.observableArray([]);
// Update the cart object in persistent storage on change
exports.cartItems.subscribe(function (items) {
    store("designco-cart", items);
});
// Populate the cart on page load
exports.cartItems(store("designco-cart") || []);
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
    exports.cartItems.push(newCartItem);
}
exports.addItem = addItem;
function getNextId() {
    var max = exports.cartItems()
        .reduce(function (prev, curr) { return curr.cartItemId > prev ? curr.cartItemId : prev; }, 0);
    return max + 1;
}
//# sourceMappingURL=service.js.map