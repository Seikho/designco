import server = require("../../server");
import create = require("./put");
import read = require("./get");
import update = require("./post");

var getRoute = {
	path: "/screens",
	method: "GET",
	handler: (request, reply) => {
		read()
			.then(reply)
			.catch(reply);
	} 
}

var putRoute = {
	path: "/screens",
	method: "PUT",
	handler: (request, reply) => {
		create(request.payload)
			.then(reply)
			.catch(reply);
	}
}

var postRoute = {
	path: "/screens",
	method: "POST",
	handler: (request, reply) => {
		update(request.payload)
			.then(reply)
			.catch(reply);
	}
}