var db = require("../../store/db");
var enums = require("../../types/enums");
var OrderState = enums.OrderState;
function create(userId) {
    var newOrder = {
        userId: userId,
        orderState: OrderState[OrderState.NotSubmitted],
        createdDate: Date.now(),
        updatedDate: Date.now()
    };
    return canCreateOrder(userId)
        .then(function () { return createOrder(newOrder); });
}
function canCreateOrder(userId) {
    var criteria = {
        userId: userId,
        orderState: OrderState[OrderState.NotSubmitted]
    };
    return db("orders")
        .select()
        .where(criteria)
        .then(function (orders) {
        var canCreate = orders.length === 0;
        if (canCreate)
            return Promise.resolve(true);
        return Promise.reject("Unable to create order: Already have an unsubmitted order");
    });
}
function createOrder(order) {
    return db("orders")
        .insert(order)
        .then(function (ids) {
        order.id = ids[0];
        return Promise.resolve(order);
    });
}
module.exports = create;
//# sourceMappingURL=create.js.map