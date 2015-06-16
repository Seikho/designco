import server = require("../server");
import staticRoute = require("./static");

applyRoutes(staticRoute);

function applyRoutes(routes: {}) {
	for (var r in routes) {
		var route = routes[r];
		server.route(r);
	}
}

