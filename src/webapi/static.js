var path = require("path");
var staticPath = path.join(path.resolve(__dirname, "../../"), "front");
console.log(staticPath);
var staticRoute = {
    method: "GET",
    path: "/{param*}",
    handler: {
        directory: {
            path: staticPath
        }
    }
};
module.exports = staticRoute;
