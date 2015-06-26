import server = require("../server");
import staticRoute = require("./static");

// Load user Web API
require("./users/web");

server.route(staticRoute);
