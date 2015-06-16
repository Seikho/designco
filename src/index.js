var store = require("ls-events");
store.setHost("192.168.59.103", 6379);
var dbInit = require("./store/init");
var path = require("path");
var log = require("ls-logger");
var cfg = require("ls-config");
require("./server");
require("./sockets");
require("./handlers/users/create");
var basePath = path.resolve(__dirname, "..");
var liveDb = path.join(basePath, "designco.db");
var baseDb = path.join(basePath, "designco-base.sqlite");
cfg.config("webPort", 10000);
cfg.config("eventsPort", 10001);
cfg.config("liveDatabase", "designco.db");
cfg.config("baseDatabase", "designco-base.sqlite");
dbInit();
// Pub/sub test code
var testCode = function () {
    store.client().flushdb([], function (err, succ) {
        if (err)
            log.error("Failed to flush Redis database");
        else
            log.info("Successfully flushed Redis database");
        var testEvent = {
            event: "create",
            context: "users",
            key: "carl",
            data: { username: "carl", password: "test" }
        };
        store.pub(testEvent);
    });
};
setTimeout(testCode, 10000);
