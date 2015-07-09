var Promise = require("bluebird");
var getOrder = require("./read");
var enums = require("../../types/enums");
var OrderState = enums.OrderState;
var allowedState = OrderState[OrderState.NotSubmitted];
function canChange(orderId) {
    return getOrder({ id: orderId })
        .then(function (orders) {
        var order = orders[0];
        var canUpdate = order.orderState === allowedState;
        return Promise.resolve(canUpdate);
    });
}
module.exports = canChange;
//# sourceMappingURL=canChangeOrder.js.map