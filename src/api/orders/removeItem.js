var db = require("../../store/db");
var canChange = require("./canChangeOrder");
function remove(orderItem) {
    return canChange(orderItem.orderId)
        .then(function (isAllowed) {
        if (isAllowed)
            return removeItem(orderItem);
        return Promise.reject("Unable to change order: Permission denied");
    });
}
function removeItem(orderItem) {
    return db("orderItems")
        .delete()
        .where({ orderId: orderItem.orderId });
}
module.exports = remove;
//# sourceMappingURL=removeItem.js.map