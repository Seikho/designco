import server = require("../server");
import path = require("path");
import log = require("ls-logger");

// Load user Web API
require("./users/web");

// Load items Web API
require("./items/web");

// Load orders Web API
require("./orders/web");

var staticPath = path.join(path.resolve(__dirname, "../../"), "front");

var staticRoute = {
	method: "GET",
	path: "/{param*}",
	handler: {
		directory: {
			path: staticPath
		}
	}
}

server.ext("onPreResponse", (request, reply: any) => {
   if (request.response.output && request.response.output.statusCode === 404)
     return reply.file(path.join(staticPath, "index.html"));
   
   return reply.continue();
});

server.route(staticRoute);
