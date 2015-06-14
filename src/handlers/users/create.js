var store = require("ls-events");
var log = require("ls-logger");
// Listen to all 'create' requests
store.psub("users/create/*", createUserHandler);
function createUserHandler(channel, pattern, message) {
    var user = JSON.parse(message);
    log.info("[HANDLER] Create request '" + user.username + "'");
    getUserCreatedEvent(user).then(function (prevEvent) {
        var alreadyExists = prevEvent.length !== 0;
        if (alreadyExists)
            userAlreadyExists(user);
        else
            createUser(user);
    });
}
function getUserCreatedEvent(user) {
    return store.fetch("users", "userCreated", user.username);
}
function createUser(user) {
    // Create the entry in the database
    // If that fails, the user most likely exists, but return a verbose error.
    // 'Already existing' may occur due to race conditions
    // On db insert success, create the event. Ensure event success.
    log.info("[USER:CREATE] User created: '" + user.username + "'");
    store.pub({
        event: "userCreated",
        context: "users",
        key: user.username,
        data: user
    });
}
function userAlreadyExists(user) {
    log.error("[USER:CREATE] Failed to create '" + user.username + "': Already exists");
}
