import db = require("../../store/db");
import Promise = require("bluebird");
export = get;

function get(criteria?: any) {
	var request = db("items").select();
	
	if (criteria) request
		.where(criteria)
		.then(items => Promise.resolve(items[0]));
		
	return request;
}