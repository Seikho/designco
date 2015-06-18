var cfg = require("ls-config");
var store = require("ls-events");
var handlerLoader = require("./handlers/loader");
var dbInit = require("./store/init");
var path = require("path");
var log = require("ls-logger");
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
function startHandlers() {
    require("./server");
    require("./sockets");
    require("./webapi/loader");
    handlerLoader.init();
}
function stopServer(error) {
    console.error("Failed to create database: " + error);
}
// Pub/sub test code
var testUser = {
    username: "carl",
    displayName: "Carl Winkler",
    password: "password",
    email: "carl@longshot.io",
    enabled: 1,
    company: "Longshot"
};
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
            data: testUser
        };
        store.pub(testEvent);
    });
};
setTimeout(testCode, 5000);
