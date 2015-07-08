import db = require("../../store/db");
import read = require("./get");
import readWithItems = require("./getWithItems");
import server = require("../../server");
import Boom = require("boom");

var get = {
	path: "/orders",
	method: "GET",
	handler: (request, reply) => {
		read()
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

var getWithItems = {
	path: "/orders/{orderId}",
	method: "GET",
	handler: (request, reply) => {
		readWithItems(request.params.orderId)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

server.route(get);
server.route(getUserOrders);
server.route(getWithItems);