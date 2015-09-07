var ko = require("knockout");
var view = require("text!./view.html");
var ModalViewModel = (function () {
    function ModalViewModel(params) {
        var _this = this;
        this.title = ko.observable("");
        this.size = ko.observable("");
        this.show = ko.observable(false);
        this.displayTitle = ko.computed(function () { return !!_this.title().length; });
        console.log("Modal: ", params);
        this.title(params.title || "");
        this.size("modal-dialog modal-" + (params.size || "md"));
        if (!ko.isObservable(params.show)) {
            console.warn("Modal constructed without a 'show' observable [" + params.title + "]");
            return;
        }
        this.show = params.show;
    }
    return ModalViewModel;
})();
var component = {
    template: view,
    viewModel: ModalViewModel
};
module.exports = component;
//# sourceMappingURL=modal.js.map