import server = require("../../server");
import read = require("./get");
import create = require("./put");
import Boom = require("boom");

var getRoute = {
	path: "/screens",
	method: "GET",
	handler: (request, reply) => {
		read()
			.then(reply)
			.catch(error => reply(Boom.expectationFailed(error)));
	} 
}

var putRoute = {
	path: "/screens",
	method: "PUT",
	handler: (request, reply) => {
		create(request.payload)
			.then(reply)
			.catch(error => reply(Boom.badRequest(error)));
	}
}