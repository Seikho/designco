import cfg = require("ls-config");
import dbInit = require("./store/init");
import path = require("path");
import log = require("ls-logger");

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

function startHandlers(dbCreated: boolean) {
    log.info(`DesignCo database created: ${dbCreated}`);
    require("./server");
    require("./api/loader");    
}

function stopServer(error: string) {
    log.error("Failed to create database: " + error);
}


