import Promise = require("bluebird");
import db = require("../../store/db");
export = put;

function put(screen: App.Screen) {
	delete screen.id;
	
	if (!isValidScreen(screen))
		return Promise.reject("Invalid input: Description is required");
	
	return db("screens")
		.insert(screen);
}

function isValidScreen(screen: App.Screen) {
	var hasDescription = screen.description.length > 0;
	
	return hasDescription;
}