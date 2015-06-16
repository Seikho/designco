import server = require("../server");

function applyRoutes(routes: {}) {
	for (var r in routes) {
		var route = routes[r];
		server.route(r);
	}
}