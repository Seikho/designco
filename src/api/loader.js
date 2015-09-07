var server = require("../server");
var path = require("path");
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
};
server.ext("onPreResponse", function (request, reply) {
    if (request.response.output && request.response.output.statusCode === 404)
        return reply.file(path.join(staticPath, "index.html"));
    return reply.continue();
});
server.route(staticRoute);
//# sourceMappingURL=loader.js.map