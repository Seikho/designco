var hapi = require("hapi");
var log = require("./logger");
var pub = require("./events/pub");
var sub = require("./events/sub");
global.sub = sub;
global.pub = pub;
global.log = log;
global.config = {
    port: 45199,
    redisHost: "192.168.59.103"
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
sub("test channel", function (c, m) {
    log.info("Message received: [" + c + "] " + m);
});
setTimeout(function () {
    pub("test channel", "a testing message");
}, 1000);
log.warn("Completed synchronous functions");
