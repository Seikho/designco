import db = require("../../store/db");
import canChange = require("./canChangeOrder");
export = remove;

function remove(orderItem: App.OrderItem) {
	return canChange(orderItem.orderId)
		.then(isAllowed => {
			if (isAllowed) return removeItem(orderItem);
			return Promise.reject("Unable to change order: Permission denied");
		});
}

function removeItem(orderItem: App.OrderItem) {
	return db("orderItems")
		.delete()
		.where({orderId: orderItem.orderId});
}
