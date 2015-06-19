import path = require("path");
export = staticRoute;

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