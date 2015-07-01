var server = require("../server");
var staticRoute = require("./static");
// Load user Web API
require("./users/web");
server.route(staticRoute);
