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

function startHandlers() {
    require("./server");
    require("./sockets");
    require("./api/loader")
    findAuth();
}

function stopServer(error: string) {
    console.error("Failed to create database: " + error)
}

// Pub/sub test code

store.psub("users/*/*", (pattern, channel, msg) => {
    log.info("[" + channel + "]: " + msg);
});

var testUser: App.User = {
    username: "carl",
    displayName: "Carl Winkler",
    password: "password",
    email: "carl@longshot.io",
    enabled: 1,
    company: "Longshot"
}

var testCode = () => {
    var testEvent: store.Event = {
        event: "create",
        context: "users",
        key: "carl",
        data: testUser
    };

    store.pub(testEvent)
        .then(() => log.info("Published test message"));
};

setTimeout(testCode, 5000);



