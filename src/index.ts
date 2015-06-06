import hapi = require("hapi");
import log = require("./logger");
import pub = require("./events/pub");
import sub = require("./events/sub");

global.subscribe = sub;
global.publish = pub;
global.log = log;

//TODO: Put port in config
var port = 45199;
var server = new hapi.Server();

server.connection({
    port: port
});

server.start(() => {
    log.info("Starting server on port " + port);
});
