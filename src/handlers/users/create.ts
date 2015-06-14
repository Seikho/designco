import db = require("../../store/db");
import store = require("ls-events");
import log = require("ls-logger");

store.psub("users/create/*", createUserHandler);

function createUserHandler(channel: string, pattern: string, message: string) {
	var user: App.User = JSON.parse(message);
	log.info("[HANDLER] Create request '" + user.username + "'");
	getPreviousEvent(user).then((prevEvent: any[]) => {
		console.log(prevEvent);
		var alreadyExists = prevEvent.length > 0;
		if (alreadyExists) userAlreadyExists(user);
		
		else createUser(user);
	});
}

function getPreviousEvent(user: App.User) {
	return store.fetch("users", "create", user.username);
}

function createUser(user: App.User) {
	log.info("[USER:CREATE] User created: '" + user.username + "'");
}

function userAlreadyExists(user: App.User){
	log.error("[USER:CREATE] Failed to create '" + user.username + "': Already exists");
}