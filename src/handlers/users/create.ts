import db = require("../../store/db");
import store = require("ls-events");
import log = require("ls-logger");
import Promise = require("bluebird");

// Listen to all 'create' requests
store.psub("users/create/*", createUserHandler);

function createUserHandler(channel: string, pattern: string, message: string) {
	var user: App.User = JSON.parse(message);
	log.info("[HANDLER] Create request '" + user.username + "'");

	getUserCreatedEvent(user).then((prevEvent: any[]) => {

		var alreadyExists = prevEvent.length !== 0;
		if (alreadyExists) userAlreadyExists(user);

		else createUser(user);
	});
}

function getUserCreatedEvent(user: App.User) {
	return store.fetch("users", "userCreated", user.username);
}

/**
 * Create the entry in the database
 * If that fails, the user most likely exists, but return a verbose error.
 * 'Already existing' may occur due to race conditions
 * On db insert success, create the event. Ensure event success.
 */
function createUser(user: App.User) { // Return a promise with the result
	insertUser(user)
		.then(id => insertUserHandlder(id, user))
		.catch(() => insertFailedHandler(user));
}

function insertUserHandlder(id: number, user: App.User) {
	log.info("[USER:CREATED] Created new user: " + user.username);
	raiseCreatedEvent("userCreated", user);
}

function insertFailedHandler(user: App.User) {
	log.warn("Failed to create user: User most likely already exists");
	raiseCreatedEvent("userCreateFail", user);
}

function raiseCreatedEvent(event: string, user: App.User) {
	delete user.username;
	store.pub({
		event: event,
		context: "users",
		key: user.username,
		data: user
	});
}

function userAlreadyExists(user: App.User) {
	log.error("[USER:CREATE] Failed to create '" + user.username + "': Already exists");
}

function insertUser(user: App.User) {
	return db("users").insert(user);
}

function isValidUser(user: App.User) {
	var requiredFields = [
		"displayName",
		"username",
		"email",
		"password",
		"enabled",
		"company"
	];

	var isAnyNull = requiredFields.some(field => {
		return !!user["field"];
	});

	return isAnyNull;
}