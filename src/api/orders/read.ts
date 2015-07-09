import db = require("../../store/db");
export = get;

function get(userId?: number): Promise<App.Order[]> {
	var request = db("orders").select();
	if (userId) request.where({userId: userId});
	
	return request;
}

