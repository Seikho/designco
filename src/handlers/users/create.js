var store = require("ls-events");
var log = require("ls-logger");
store.psub("users/create/*", createUserHandler);
function createUserHandler(channel, pattern, message) {
    var user = JSON.parse(message);
    log.info("[HANDLER] Create request '" + user.username + "'");
    getPreviousEvent(user).then(function (prevEvent) {
        console.log(prevEvent);
        var alreadyExists = prevEvent.length > 0;
        if (alreadyExists)
            userAlreadyExists(user);
        else
            createUser(user);
    });
}
function getPreviousEvent(user) {
    return store.fetch("users", "create", user.username);
}
function createUser(user) {
    log.info("[USER:CREATE] User created: '" + user.username + "'");
}
function userAlreadyExists(user) {
    log.error("[USER:CREATE] Failed to create '" + user.username + "': Already exists");
}
