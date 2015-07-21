var store = require("ls-events");
var log = require("ls-logger");
var cfg = require("ls-config");
store.psub("services/start/auth", eventHandler)
    .catch(log.error);
function find() {
    return store.fetch("services", "start", "auth")
        .then(setLatestPort)
        .then(log.info)
        .catch(log.error);
}
function eventHandler(pattern, channel, message) {
    var port = message.port;
    cfg.config("authPort", port);
    log.info("Auth started event received. Port: " + port);
}
function setLatestPort(fetchResults) {
    log.debug("Running");
    if (fetchResults.length === 0) {
        return Promise.reject("The auth service has not emitted any 'start' events");
    }
    var reduction = function (prev, curr, i) {
        var isCurrentHigher = curr.published > prev.published;
        return isCurrentHigher ? curr : prev;
    };
    var mostRecent = fetchResults.reduce(reduction);
    cfg.config("authPort", mostRecent.data.port);
    return Promise.resolve("Auth service most recent port: " + mostRecent.data.port);
}
module.exports = find;
//# sourceMappingURL=findService.js.map