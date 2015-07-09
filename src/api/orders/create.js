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
    return db("orders")
        .insert(newOrder);
}
module.exports = create;
//# sourceMappingURL=create.js.map