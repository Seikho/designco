import db = require("../../store/db");
import enums = require("../../types/enums");
import OrderState = enums.OrderState;
export = create;

function create(userId: number) {
	var newOrder: App.Order = {
		userId: userId,
		orderState: OrderState[OrderState.NotSubmitted],
		createdDate: Date.now(),
		updatedDate: Date.now()
	}
	
	return db("orders")
		.insert(newOrder);
}