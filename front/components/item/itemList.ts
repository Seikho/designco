import ko = require("knockout");
import ItemModel = require("./itemModel");
import $ = require("jquery");
var view = require("text!./items")
export = ItemList;

class ItemList {
    constructor(type?: string) {
       this.getModels(type);
    }

    items = ko.observableArray<ItemModel>();
    
    getModels = (type?: string) => {
        type = type || "";
        $.get(`/items/${type}`).then(this.loadModels);
    }
    
    loadModels = (items: Array<App.Item>) => {
        var itemModels = items.map(item => new ItemModel(item));
        this.items(itemModels);
    }

    saveModels = () => {
        var models = this.items().map(item => item.saveToModel());
        // TODO: POST request...
    }
}
