var ko = require("knockout");
var ItemModel = require("./itemModel");
var $ = require("jquery");
var view = require("text!./items");
var ItemList = (function () {
    function ItemList(type) {
        var _this = this;
        this.items = ko.observableArray();
        this.getModels = function (type) {
            type = type || "";
            $.get("/items/" + type).then(_this.loadModels);
        };
        this.loadModels = function (items) {
            var itemModels = items.map(function (item) { return new ItemModel(item); });
            _this.items(itemModels);
        };
        this.saveModels = function () {
            var models = _this.items().map(function (item) { return item.saveToModel(); });
            // TODO: POST request...
        };
        this.getModels(type);
    }
    return ItemList;
})();
module.exports = ItemList;
//# sourceMappingURL=itemList.js.map