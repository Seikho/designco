import server = require("../../server");
import Boom = require("boom");
import read = require("./read");
import create = require("./create");
import udpate = require("./update");


var readRoute = {
	path: "/items/{id?}",
	method: "GET",
	handler: (request, reply) => {
		var id = request.params.id || null;		
		read(id)
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

server.route(readRoute);
server.route(createRoute);
server.route(readByType);