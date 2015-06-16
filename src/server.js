var hapi = require("hapi");
var cfg = require("ls-config");
var log = require("ls-logger");
var server = new hapi.Server();
// Web API listener
server.connection({
    port: cfg.config("webPort"),
    labels: "web"
});
server.start(function () {
    log.info("Server started on port " + cfg.config("webPort"));
});
module.exports = server;
