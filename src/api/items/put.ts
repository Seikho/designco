import db = require("../../store/db");
import enums = require("../../types/enums");
import ActiveState = enums.ActiveState;
import ItemType = enums.ItemType;
export = put;

function put(item: App.Item): Promise<number> {
	if (!isValidItem(item)) 
		return Promise.reject("Invalid item: Require fields missing");
		
	return db("items")
		.insert(item)
		.then(newIds => Promise.resolve(newIds[0]));
}

function isValidItem(item: App.Item): boolean {
	delete item.id;
	item.itemState = ActiveState[ActiveState.Active];
	
	var isValidType = !!ItemType[item.itemType]
	var isValidDesc = item.description.length > 5;
	
	return isValidType && isValidDesc;	
}