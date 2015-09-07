import ko = require("knockout");
var view = require("text!./view.html");
export = component;

class ModalViewModel {
    constructor(params) {
        console.log("Modal: ", params);
        this.title(params.title || "");
        this.size("modal-dialog modal-" + (params.size || "md"));
        if (!ko.isObservable(params.show)) {
            console.warn("Modal constructed without a 'show' observable [" + params.title + "]");
            return;
        }
        
        this.show = params.show;
    }
    title = ko.observable("");
    size = ko.observable("");
    show = ko.observable(false);

    displayTitle = ko.computed(() => !!this.title().length);

}

var component = {
    template: view,
    viewModel: ModalViewModel
}