import server = require("../server");
import path = require("path");

// Load user Web API
require("./users/web");

// Load items Web API
require("./items/web");



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

server.route(staticRoute);
