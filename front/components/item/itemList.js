var ko = require("knockout");
var ItemModel = require("./itemModel");
var $ = require("jquery");
var view = require("text!./items");
var ItemList = (function () {
    function ItemList() {
        var _this = this;
        this.items = ko.observableArray();
        this.itemType = ko.observable("");
        this.loadModels = function (items) {
            var itemModels = items.map(function (item) { return new ItemModel(item); });
            _this.items(itemModels);
        };
        this.saveModels = function () {
            var models = _this.items().map(function (item) { return item.saveToModel(); });
            // TODO: POST request...
        };
        this.itemType.subscribe(function (type) {
            $.get("/items/" + type)
                .then(_this.items);
        });
    }
    return ItemList;
})();
module.exports = ItemList;
//# sourceMappingURL=itemList.js.map