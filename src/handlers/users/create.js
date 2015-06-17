var db = require("../../store/db");
var store = require("ls-events");
var log = require("ls-logger");
// Listen to all 'create' requests
store.psub("users/create/*", createUserHandler);
function createUserHandler(channel, pattern, message) {
    var user = JSON.parse(message);
    log.info("[HANDLER] Create request '" + user.username + "'");
    // If the user isn't valid, do not continue
    if (!isValidUser(user))
        return;
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
/**
 * Create the entry in the database
 * If that fails, the user most likely exists, but return a verbose error.
 * 'Already existing' may occur due to race conditions
 * On db insert success, create the event. Ensure event success.
 */
function createUser(user) {
    insertUser(user)
        .then(function (id) { return insertUserHandlder(id, user); });
}
function insertUserHandlder(id, user) {
    if (id > 0) {
        log.info("[USER:CREATEFAIL] User already exists: " + user.username);
        raiseCreatedEvent("userCreated", user);
        return;
    }
    log.info("[USER:CREATE] User created: '" + user.username + "'");
    raiseCreatedEvent("userCreateFail", user);
}
function raiseCreatedEvent(event, user) {
    store.pub({
        event: event,
        context: "users",
        key: user.username,
        data: user
    });
}
function userAlreadyExists(user) {
    log.error("[USER:CREATE] Failed to create '" + user.username + "': Already exists");
}
function insertUser(user) {
    return db("users").insert(user);
}
function isValidUser(user) {
    var requiredFields = [
        "displayName",
        "username",
        "email",
        "password",
        "enabled",
        "company"
    ];
    var isAnyNull = requiredFields.some(function (field) {
        return !!user["field"];
    });
    return isAnyNull;
}
