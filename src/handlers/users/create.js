var db = require("../../store/db");
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
/**
 * Create the entry in the database
 * If that fails, the user most likely exists, but return a verbose error.
 * 'Already existing' may occur due to race conditions
 * On db insert success, create the event. Ensure event success.
 */
function createUser(user) {
    insertUser(user)
        .then(function (id) { return insertUserHandlder(id, user); })
        .catch(function () { return insertFailedHandler(user); });
}
function insertUserHandlder(id, user) {
    log.info("[USER:CREATED] Created new user: " + user.username);
    raiseCreatedEvent("userCreated", user);
}
function insertFailedHandler(user) {
    log.warn("Failed to create user: User most likely already exists");
    raiseCreatedEvent("userCreateFail", user);
}
function raiseCreatedEvent(event, user) {
    delete user.username;
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
