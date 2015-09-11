import Lists = require("ls-ko-lists");
import ItemList = require("./itemList");
import ItemModel = require("./itemModel");
var view = require("text!./items.html");
export = component;

var options: Lists.ListOptions = {
    url: "/items",
    createModel: (model?: any) => new ItemModel(model)
}

var component = {
    template: view,
    viewModel: new ItemList(options)
}

