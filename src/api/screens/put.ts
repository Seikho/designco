import Promise = require("bluebird");
import db = require("../../store/db");
import Boom = require("boom");
export = put;

function put(screen: App.Screen) {
	delete screen.id;
	
	if (!isValidScreen(screen))
		return Promise.reject(Boom.badData("Invalid input: Description is required"));
	
	return db("screens")
		.insert(screen);
}

function isValidScreen(screen: App.Screen) {
	var hasDescription = screen.description.length > 0;
	
	return hasDescription;
}