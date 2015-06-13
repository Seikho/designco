import dbInit = require("./store/init");
import path = require("path");
import hapi = require("hapi");
import log = require("designco-logger");
import store = require("designco-store");
import cfg = require("designco-config");

var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");

store.setHost("192.168.59.103", 6379);
cfg.config("port", 45199);
cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");

dbInit();

//TODO: Put port in config
var port = cfg.config("port") || 45199;
var server = new hapi.Server();

server.connection({
    port: port
});

server.start(() => {
    log.info("Starting server on port " + cfg.config("port"));
});

store.psub("users/create/*", (channel, pattern, message) => {
    log.info("Message received: [" + channel + "] " + pattern + " -- " + message);
});