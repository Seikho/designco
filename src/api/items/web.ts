import server = require("../../server");
import Boom = require("boom");
import read = require("./read");
import create = require("./create");
import update = require("./update");

var readByType = {
	path: "/items/{type}",
	method: "GET",
	handler: (request, reply) => {
		read({ itemType: request.params.type })
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var createRoute = {
	path: "/items",
	method: "PUT",
	handler: (request, reply) => {
		create(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var updateRoute = {
	path: "/items",
	method: "POST",
	handler: (request, reply) => {
		update(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

server.route(createRoute);
server.route(readByType);
server.route(updateRoute);