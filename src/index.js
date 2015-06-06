var hapi = require("hapi");
var log = require("./logger");
var pub = require("./events/pub");
var sub = require("./events/sub");
global.subscribe = sub;
global.publish = pub;
global.log = log;
//TODO: Put port in config
var port = 45199;
var server = new hapi.Server();
server.connection({
    port: port
});
server.start(function () {
    log.info("Starting server on port " + port);
});
