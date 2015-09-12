import ko = require("knockout");
import $ = require("jquery");
import ItemModel = require("../../item/itemModel");
import Lists = require("ls-ko-lists");
export = AdminItemModel;

class AdminItemModel extends Lists.Model {
    constructor() {
        super();
    }
}