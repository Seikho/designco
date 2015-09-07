import ko = require("knockout");
import ItemModel = require("./itemModel");
import $ = require("jquery");
export = component;

class ItemList {
    constructor(){}
    
    items = ko.observableArray<ItemModel>();
    
    loadModels = (items: Array<App.Item>) => {
        var itemModels = items.map(item => new ItemModel(item));
        this.items(itemModels);
    }
    
    saveModels = () => {
        var models = this.items().map(item => item.saveToModel());
        // TODO: POST request...
    }
}

var component = {
    template: "/components/screen/view.html",
    viewModel: ItemList
};