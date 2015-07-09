import db = require("../../store/db");
import canChange = require("./canChangeOrder");
export = add;

function add(orderItem: App.OrderItem) {
	return canChange(orderItem.orderId)
		.then(isAllowed => {
			if (isAllowed) return addItem(orderItem);
			return Promise.reject("Unable to change order: Permission denied");
		});
}

function addItem(orderItem: App.OrderItem) {
	return db("orderItems")
		.insert(orderItem)
		.then(ids => {
			orderItem.id = ids[0];
			return Promise.resolve(orderItem);
		});
}
