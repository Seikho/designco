import db = require("../../store/db");
import Promise = require("bluebird");
export = get;

function get(itemId?: number) {
	var request = db("items").select();
	
	if (itemId) request.where({id: itemId});
	
	return request;
}