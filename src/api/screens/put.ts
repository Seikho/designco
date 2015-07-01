import db = require("../../store/db");
export = put;

function put(screen: App.Screen) {
	delete screen.id;
	
	return db("screens")
		.insert(screen)
}