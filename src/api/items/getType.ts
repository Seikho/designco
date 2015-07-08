import db = require("../../store/db");
import enums = require("../../types/enums");
import ItemType = enums.ItemType;
import Promise = require("bluebird");
export = get;

function get(itemType: string) {
	var isValidType = !!ItemType[itemType];
	if (!isValidType) return Promise.reject("Invalid item type");
	
	return db("items")
		.select()
		.where({itemType: itemType });
}