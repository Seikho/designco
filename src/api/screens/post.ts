import Promise = require("bluebird");
import db = require("../../store/db");
export = post;

function post(screen: App.Screen) {
	if (!isValidScreen(screen))
		return Promise.reject("Invalid request. Required fields not supplied.");

	return db("screens")
		.update(screen)
		.where({ id: screen.id });
}

function isValidScreen(screen: App.Screen) {
	var hasId = screen.id > 0;
	var hasDescrption = screen.description.length > 0;

	return (hasId && hasDescrption);
}