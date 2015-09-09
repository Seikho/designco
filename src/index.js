var cfg = require("ls-config");
var dbInit = require("./store/init");
var path = require("path");
var log = require("ls-logger");
// Initialise the web and socket servers
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
cfg.config("designcoLive", liveDb);
cfg.config("designcoBase", baseDb);
cfg.config("webPort", 10001);
dbInit()
    .then(startHandlers)
    .catch(stopServer);
function startHandlers(dbCreated) {
    log.info("DesignCo database created: " + dbCreated);
    require("./server");
    require("./api/loader");
}
function stopServer(error) {
    log.error("Failed to create database: " + error);
}
//# sourceMappingURL=index.js.map