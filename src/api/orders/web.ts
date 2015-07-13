import db = require("../../store/db");
import read = require("./read");
import create = require("./create");
import readWithItems = require("./readWithItems");
import removeItem = require("./removeItem");
import addItem = require("./addItem");
import server = require("../../server");
import Boom = require("boom");

/**
 * Will retrieve all orders or a single order with all items attached
 */
var get = {
	path: "/orders/{orderId?}",
	method: "GET",
	handler: (request, reply) => {
		var id = request.params.orderId || null;
		read(id)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var getUserOrders = {
	path: "/user/orders/{userId}",
	method: "GET",
	handler: (request, reply) => {
		read(request.params.userId)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var createRoute = {
	path: "/orders",
	method: "PUT",
	handler: (request, reply) => {
		create(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var addItemRoute = {
	path: "/orders/addItem",
	method: "POST",
	handler: (request, reply) => {
		addItem(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var removeItemRoute = {
	path: "/orders/removeItem",
	method: "POST",
	handler: (request, reply) => {
		removeItem(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

server.route(get);
server.route(getUserOrders);
server.route(createRoute);
server.route(addItemRoute);
server.route(removeItemRoute);