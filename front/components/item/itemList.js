var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lists = require("ls-ko-lists");
var ko = require("knockout");
var $ = require("jquery");
var view = require("text!./items");
var ItemList = (function (_super) {
    __extends(ItemList, _super);
    function ItemList(options) {
        var _this = this;
        _super.call(this, options);
        this.items = ko.observableArray();
        this.getModels = function (type) {
            type = type || "";
            $.get("/items/" + type).then(_this.loadModels);
        };
    }
    return ItemList;
})(Lists.List);
module.exports = ItemList;
//# sourceMappingURL=itemList.js.map