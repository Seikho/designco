import ko = require("knockout");
import ItemModel = require("./itemModel");
import $ = require("jquery");
var view = require("text!./items")
export = component;

class ItemList {
    constructor() {
        this.itemType.subscribe(type => {
            $.get(`/items/${type}`)
                .then(this.items);
        });
    }

    items = ko.observableArray<ItemModel>();
    itemType = ko.observable("");

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
    template: view,
    viewModel: ItemList
};