import Lists = require("ls-ko-lists");
import ko = require("knockout");
import ItemModel = require("./itemModel");
import $ = require("jquery");
var view = require("text!./items");

export = ItemList;

class ItemList extends Lists.List<ItemModel> {
    constructor(options: Lists.ListOptions) {
       super(options);
    }

    items = ko.observableArray<ItemModel>();
    
    getModels = (type?: string) => {
        type = type || "";
        $.get(`/items/${type}`).then(this.loadModels);
    }
}
