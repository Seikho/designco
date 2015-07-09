import db = require("../../store/db");
import Promise = require("bluebird");
export = get;

function get(orderId: number) {
	return db("orders")
		.innerJoin("orderItems", "orders.id", "=", "orderItems.orderId")
		.where("orders.id", orderId);
}