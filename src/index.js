var cfg = require("ls-config");
var store = require("ls-events");
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
function startHandlers() {
    require("./server");
    require("./sockets");
    require("./api/loader");
    findAuth();
}
function stopServer(error) {
    console.error("Failed to create database: " + error);
}
// Pub/sub test code
store.psub("users/*/*", function (pattern, channel, msg) {
    log.info("[" + channel + "]: " + msg);
});
var testUser = {
    username: "carl",
    displayName: "Carl Winkler",
    password: "password",
    email: "carl@longshot.io",
    enabled: 1,
    company: "Longshot"
};
var testCode = function () {
    var testEvent = {
        event: "create",
        context: "users",
        key: "carl",
        data: testUser
    };
    store.pub(testEvent)
        .then(function () { return log.info("Published test message"); });
};
setTimeout(testCode, 5000);
