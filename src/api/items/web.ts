import server = require("../../server");
import Boom = require("boom");
import read = require("./read");
import create = require("./create");

var readAll = {
	path: "/items",
	method: "GET",
	handler: (request, reply) => {
		read()
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}	
}

var readOne = {
	path: "/items/{id}",
	method: "GET",
	handler: (request, reply) => {
		read({id: request.params.id})
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var readByType = {
	path: "/items/{type}/type",
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

server.route(readAll);
server.route(readOne);
server.route(createRoute);
server.route(readByType);