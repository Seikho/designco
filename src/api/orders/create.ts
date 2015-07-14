import db = require("../../store/db");
import enums = require("../../types/enums");
import getOrder = require("./read");
import OrderState = enums.OrderState;
export = create;

function create(userId: number) {
	var newOrder: App.Order = {
		userId: userId,
		orderState: OrderState[OrderState.NotSubmitted],
		createdDate: Date.now(),
		lastModified: Date.now()
	}

	return canCreateOrder(userId)
		.then(() => createOrder(newOrder));
}

function canCreateOrder(userId: number) {
	var criteria = {
		userId: userId,
		orderState: OrderState[OrderState.NotSubmitted]
	};

	return db("orders")
		.select()
		.where(criteria)
		.then(orders => {
			var canCreate = orders.length === 0;
			if (canCreate) return Promise.resolve(true);
			return Promise.reject("Unable to create order: Already have an unsubmitted order");
		});
}

function createOrder(order: App.Order) {
	return db("orders")
		.insert(order)
		.then(ids => {
			order.id = ids[0];
			return Promise.resolve(order);
		});
}