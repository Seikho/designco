var db = require("../../store/db");
var canChange = require("./canChangeOrder");
function add(orderItem) {
    return canChange(orderItem.orderId)
        .then(function (isAllowed) {
        if (isAllowed)
            return addItem(orderItem);
        return Promise.reject("Unable to change order: Permission denied");
    });
}
function addItem(orderItem) {
    return db("orderItems")
        .insert(orderItem)
        .then(function (ids) {
        orderItem.id = ids[0];
        return Promise.resolve(orderItem);
    });
}
module.exports = add;
//# sourceMappingURL=addItem.js.map