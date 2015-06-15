import store = require("ls-events");
store.setHost("192.168.59.103", 6379);

import dbInit = require("./store/init");
import path = require("path");
import hapi = require("hapi");
import log = require("ls-logger");
import cfg = require("ls-config");
import io = require("socket.io");
require("./handlers/users/create");

var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");

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
var ioServer = io(server.select("events").listener);
cfg.config("io", ioServer);

server.start(() => {
    log.info("Starting server on port " + cfg.config("webPort"));
});

ioServer.on("connection", socket => {
    log.info("[CONNECTED] " + socket.id);
    socket.on("subscribe", msg => {
        log.info("[SOCKET:SUB] " + socket.id + ": " + msg);
        
        var options = JSON.parse(msg);
        
        // Subscribe the socket to the requested channel
        store.psub(options.channel, (ch, pt, msg) => {
            socket.emit(ch, msg);
        });
    });
    
});

// Pub/sub test code
var testCode = () => {
    store.client().flushdb([], (err, succ) => {
        if (err) log.error("Failed to flush Redis database");
        else log.info("Successfully flushed Redis database");

        var testEvent: store.Event = {
            event: "create",
            context: "users",
            key: "carl",
            data: { username: "carl", password: "test" }
        };

        store.pub(testEvent);
    });
};

setTimeout(testCode, 1000);



