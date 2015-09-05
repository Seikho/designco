var server = require("../server");
var path = require("path");
var log = require("ls-logger");
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
var frontEndSections = [
    "screen",
    "banner",
    "vehicle",
    "print",
    "fabricate",
    "traditional"
];
frontEndSections.forEach(function (section) {
    server.route({
        method: "GET",
        path: "/" + section,
        handler: {
            file: path.join(staticPath, "index.html")
        }
    });
});
log.info("Loaded front end route: " + JSON.stringify(frontEndSections));
server.route(staticRoute);
//# sourceMappingURL=loader.js.map