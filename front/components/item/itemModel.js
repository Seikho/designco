var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lists = require("ls-ko-lists");
var ko = require("knockout");
var view = require("text!./view.html");
var ItemViewModel = (function (_super) {
    __extends(ItemViewModel, _super);
    function ItemViewModel(item) {
        _super.call(this);
        this.id = ko.observable(0);
        this.description = ko.observable("");
        this.itemType = ko.observable("");
        this.itemState = ko.observable(0);
        if (!item)
            return;
        this.loadModel(item);
    }
    ItemViewModel.prototype.loadModel = function (item) {
        this.id(item.id);
        this.description(item.description);
        this.itemType(item.itemType);
        this.itemState(item.itemState);
    };
    ItemViewModel.prototype.saveToModel = function () {
        return {
            id: this.id(),
            description: this.description(),
            itemType: this.itemType(),
            itemState: this.itemState()
        };
    };
    return ItemViewModel;
})(Lists.Model);
module.exports = ItemViewModel;
//# sourceMappingURL=itemModel.js.map