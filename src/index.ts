import cfg = require("ls-config");
import dbInit = require("./store/init");
import path = require("path");
import log = require("ls-logger");

// Initialise the web and socket servers

var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");

cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");
cfg.config("webPort", 10001);

dbInit()
    .then(startHandlers)
    .catch(stopServer);

function startHandlers() {
    require("./server");
    require("./api/loader");    
}

function stopServer(error: string) {
    log.error("Failed to create database: " + error);
}


