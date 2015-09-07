var ko = require("knockout");
var ItemModel = require("./itemModel");
var ItemList = (function () {
    function ItemList() {
        var _this = this;
        this.items = ko.observableArray();
        this.loadModels = function (items) {
            var itemModels = items.map(function (item) { return new ItemModel(item); });
            _this.items(itemModels);
        };
        this.saveModels = function () {
            var models = _this.items().map(function (item) { return item.saveToModel(); });
            // TODO: POST request...
        };
    }
    return ItemList;
})();
var component = {
    template: "/components/screen/view.html",
    viewModel: ItemList
};
module.exports = component;
//# sourceMappingURL=itemList.js.map