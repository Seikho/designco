var dbInit = require("./store/init");
var path = require("path");
var hapi = require("hapi");
var log = require("ls-logger");
var store = require("ls-events");
var cfg = require("ls-config");
var io = require("socket.io");
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
store.setHost("192.168.59.103", 6379);
cfg.config("webPort", 10000);
cfg.config("eventsPort", 10001);
cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");
dbInit();
//TODO: Put port in config
var server = new hapi.Server();
// Web API listener
server.connection({
    port: cfg.config("webPort"),
    labels: "web"
});
// Events API listener
server.connection({
    port: cfg.config("eventsPort"),
    labels: "events"
});
// Attach socket.io and store the server in config
cfg.config("io", io(server.select("events").listener));
server.start(function () {
    log.info("Starting server on port " + cfg.config("webPort"));
});
