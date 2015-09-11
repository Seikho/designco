import Lists = require("ls-ko-lists");
import ko = require("knockout");
import $ = require("jquery");
var view = require("text!./view.html");

export = ItemViewModel;

class ItemViewModel extends Lists.Model {
    constructor(item?: App.Item) {
        super();
        if (!item) return;
        this.loadModel(item);
    }

    loadModel(item: App.Item) {
        this.id(item.id);
        this.description(item.description);
        this.itemType(item.itemType);
        this.itemState(item.itemState);
    }
    
    saveToModel(): App.Item {
        return {
            id: this.id(),
            description: this.description(),
            itemType: this.itemType(),
            itemState: this.itemState()
        }
    }

    id = ko.observable(0);
    description = ko.observable("");
    itemType = ko.observable("");
    itemState = ko.observable(0);

}