import ko = require("knockout");
var view = require("text!./view.html");

export = ItemViewModel;



class ItemViewModel {
    constructor(item?: App.Item) {
        if (!item) return;
        this.loadFromModel(item);
    }

    loadFromModel = (item: App.Item) => {
        this.id(item.id);
        this.description(item.description);
        this.itemType(item.itemType);
        this.itemState(item.itemState);
    }
    
    saveToModel = (): App.Item => {
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