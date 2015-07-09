var db = require("../../store/db");
function get(orderId) {
    return db("orders")
        .innerJoin("orderItems", "orders.id", "=", "orderItems.orderId")
        .where("orders.id", orderId);
}
module.exports = get;
//# sourceMappingURL=getWithItems.js.map