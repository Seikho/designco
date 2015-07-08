import server = require("../../server");
import read = require("./get");

var getAll = {
	path: "/items",
	method: "GET",
	handler: (request, reply) => {
		read()
			.then(reply)
			.catch(reply);
	}	
}

var getOne = {
	path: "/items/{id}",
	method: "GET",
	handler: (request, reply) => {
		read(request.params.id)
			.then(reply)
			.catch(reply);
	}
}

server.route(getAll);
server.route(getOne);