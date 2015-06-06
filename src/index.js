var hapi = require("hapi");
var log = require("./logger");
var pub = require("./events/pub");
var sub = require("./events/sub");
global.subscribe = sub;
global.publish = pub;
global.log = log;
global.config = {
    port: 45199,
    redisUrl: "192.168.59.103:6379"
};
//TODO: Put port in config
var port = global.config.port || 45199;
var server = new hapi.Server();
server.connection({
    port: port
});
server.start(function () {
    log.info("Starting server on port " + global.config.port);
});
