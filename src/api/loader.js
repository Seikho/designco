var server = require("../server");
var staticRoute = require("./static");
require("./users/web");
server.route(staticRoute);
