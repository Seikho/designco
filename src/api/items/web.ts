import server = require("../../server");
import Boom = require("boom");
import read = require("./get");
import create = require("./put");

var getAll = {
	path: "/items",
	method: "GET",
	handler: (request, reply) => {
		read()
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}	
}

var getOne = {
	path: "/items/{id}",
	method: "GET",
	handler: (request, reply) => {
		read(request.params.id)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

var put = {
	path: "/items",
	method: "PUT",
	handler: (request, reply) => {
		create(request.payload)
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	}
}

server.route(getAll);
server.route(getOne);
server.route(put);