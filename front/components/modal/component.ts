import ko = require("knockout");
var view = require("text!./view.html");
export = component;

var component = {
    template: view,
    viewModel: ModalViewModel 
}

class ModalViewModel {
    constructor(params) {
        this.title(params.title || "");
        this.size("modal fade modal-" + (params.size || "md"));
    }
    title = ko.observable("");
    size = ko.observable("");
    
    displayTitle = ko.computed(() => !!this.title().length);    
}