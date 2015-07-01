import Promise = require("bluebird");
import db = require("../../store/db");
export = get;

function get(id?: number): Promise<App.Screen|App.Screen[]> {
	var request = db("screens").select();

	if (!id) return request;

	return new Promise<App.Screen>((resolve, reject) => {
		request
			.where({ id: id })
			.then((screens: any[]) => Promise.resolve(screens[0]));
	});
}
