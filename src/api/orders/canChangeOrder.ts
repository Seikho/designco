import db = require("../../store/db");
import Promise = require("bluebird");
import getOrder = require("./read")
import enums = require("../../types/enums");
import OrderState = enums.OrderState;
export = canChange;

var allowedState = OrderState[OrderState.NotSubmitted];

function canChange(orderId: number): Promise<boolean> {
	
	return getOrder({ id: orderId })
		.then(orders => {
			var order = orders[0];
			var canUpdate = order.orderState === allowedState;
			return Promise.resolve(canUpdate);
		});
}
