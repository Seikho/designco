var dbInit = require("./store/init");
var path = require("path");
var hapi = require("hapi");
var log = require("./logger");
var pub = require("./events/pub");
var sub = require("./events/sub");
var psub = require("./events/patternSub");
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
global.sub = sub;
global.pub = pub;
global.psub = psub;
global.log = log;
global.config = {
    port: 45199,
    redisHost: "192.168.59.103",
    liveDatabase: liveDb,
    baseDatabase: baseDb
};
dbInit();
//TODO: Put port in config
var port = global.config.port || 45199;
var server = new hapi.Server();
server.connection({
    port: port
});
server.start(function () {
    log.info("Starting server on port " + global.config.port);
});
psub("users.create.*", function (channel, pattern, message) {
    log.info("Message received: [" + channel + "] " + pattern + " -- " + message);
});
setTimeout(function () {
    pub("users.create.carl", "winkler test 1 2 3");
    log.warn("Published message");
}, 1000);
log.warn("Completed synchronous functions");
