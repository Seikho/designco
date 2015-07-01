var cfg = require("ls-config");
var dbInit = require("./store/init");
var path = require("path");
var log = require("ls-logger");
var findAuth = require("./api/users/findService");
// Initialise the web and socket servers
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
cfg.config("webPort", 10002);
cfg.config("socketsPort", 10001);
cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");
dbInit()
    .then(startHandlers)
    .catch(stopServer);
findAuth()
    .then(log.info)
    .catch(log.error);
function startHandlers() {
    require("./server");
    require("./sockets");
    require("./api/loader");
}
function stopServer(error) {
    console.error("Failed to create database: " + error);
}
