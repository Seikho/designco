import ko = require("knockout");
import $ = require("jquery");
import ItemModel = require("../../item/itemModel");
export = AdminItemModel;

class AdminItemModel extends ItemModel {
	constructor(item?: App.Item) {
		super(item);
	}
}