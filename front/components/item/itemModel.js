var ko = require("knockout");
var view = require("text!./view.html");
var ItemViewModel = (function () {
    function ItemViewModel(item) {
        var _this = this;
        this.loadFromModel = function (item) {
            _this.id(item.id);
            _this.description(item.description);
            _this.itemType(item.itemType);
            _this.itemState(item.itemState);
        };
        this.saveToModel = function () {
            return {
                id: _this.id(),
                description: _this.description(),
                itemType: _this.itemType(),
                itemState: _this.itemState()
            };
        };
        this.id = ko.observable(0);
        this.description = ko.observable("");
        this.itemType = ko.observable("");
        this.itemState = ko.observable(0);
        if (!item)
            return;
        this.loadFromModel(item);
    }
    return ItemViewModel;
})();
module.exports = ItemViewModel;
//# sourceMappingURL=itemModel.js.map