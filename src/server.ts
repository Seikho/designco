import hapi = require("hapi");
import cfg = require("ls-config");
import log = require("ls-logger");

export = server;

var server = new hapi.Server();

// Web API listener
server.connection({
    port: cfg.config("webPort"),
    labels: "web"
});

server.start(() => {
    log.info("Server started on port " + cfg.config("webPort"));
});
