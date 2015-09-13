import ko = require("knockout");
import $ = require("jquery");
import Lists = require("ls-ko-lists");
import AdminItem = require("./adminItemModel"); 
export = AdminItemList;

class AdminItemList extends Lists.List<AdminItem> {
    constructor(options: Lists.ListOptions) {
        super(options);
    }
}