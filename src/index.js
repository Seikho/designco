var dbInit = require("./store/init");
var path = require("path");
var hapi = require("hapi");
var log = require("designco-logger");
var store = require("designco-store");
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
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
/**
 * Test code
 */
var c1 = store.client();
log.warn("Clearing Redis database...");
c1.flushdb(console.log);
log.warn("Cleared database");
store.psub("users/create/*", function (channel, pattern, message) {
    log.info("Message received: [" + channel + "] " + pattern + " -- " + message);
});
setTimeout(function () {
    var event = {
        event: 0 /* Create */,
        context: 0 /* User */,
        key: "c.winkler",
        data: {
            username: "c.winkler",
            email: "carl@longshot.io",
            enabled: 1,
            company: "longshot.io"
        }
    };
    store.pub(event);
}, 1000);
var redisClient = store.client();
setTimeout(function () {
    log.debug("Checking event store...");
    redisClient.zrange(["events", 0, -1], console.log);
}, 2000);
log.warn("Completed synchronous functions");
