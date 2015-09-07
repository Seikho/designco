var ko = require("knockout");
var view = require("text!./view.html");
var component = {
    template: view,
    viewModel: ModalViewModel
};
var ModalViewModel = (function () {
    function ModalViewModel(params) {
        var _this = this;
        this.title = ko.observable("");
        this.size = ko.observable("");
        this.displayTitle = ko.computed(function () { return !!_this.title().length; });
        this.title(params.title || "");
        this.size("modal fade modal-" + (params.size || "md"));
    }
    return ModalViewModel;
})();
module.exports = component;
//# sourceMappingURL=component.js.map