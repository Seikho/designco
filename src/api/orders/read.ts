import db = require("../../store/db");
export = get;

function get(criteria?: any): Promise<App.Order[]> {
	var request = db("orders").select();
	if (criteria) request.where(criteria);
	
	return request;
}

