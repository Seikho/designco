var ItemList = require("./itemList");
var ItemModel = require("./itemModel");
var view = require("text!./items.html");
var options = {
    url: "/items",
    createModel: function () { return new ItemModel(); }
};
var component = {
    template: view,
    viewModel: new ItemList(options)
};
module.exports = component;
//# sourceMappingURL=itemComponent.js.map