import store = require("ls-events");
store.setHost("192.168.59.103", 6379);

import handlerLoader = require("./handlers/loader");
import dbInit = require("./store/init");
import path = require("path");
import log = require("ls-logger");
import cfg = require("ls-config");

// Initialise the web and socket servers
require("./server");
require("./sockets");


var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");

cfg.config("webPort", 10000);
cfg.config("eventsPort", 10001);
cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");

dbInit();
handlerLoader.init();

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

setTimeout(testCode, 10000);



