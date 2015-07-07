import Promise = require("bluebird");
import db = require("../../store/db");
import Boom = require("boom");
export = get;

function get(id?: number): Promise<App.Screen|App.Screen[]> {
	var request = db("screens").select();

	return new Promise<App.Screen>((resolve, reject) => {
		
		if (id) request.where({ id: id });
		
		request
			.then(screens => {
				if (id) return resolve(screens[0]);
				resolve(screens);
			}).catch(error => reject(Boom.expectationFailed("Failed to retrieve from database: " + error)));
	});
}
