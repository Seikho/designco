import cfg = require("ls-config");
import store = require("ls-events");
import dbInit = require("./store/init");
import path = require("path");
import log = require("ls-logger");
import findAuth = require("./api/users/findService");

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

findAuth();

function startHandlers() {
    require("./server");
    require("./sockets");
    require("./api/loader")
}

function stopServer(error: string) {
    console.error("Failed to create database: " + error);
}


