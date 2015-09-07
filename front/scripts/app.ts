import NavVM = require("../components/nav/nav");
import ko = require("knockout");
import modal = require("../components/modal/modal");
import $ = require("jquery");

ko.components.register("modal", modal);

ko.bindingHandlers["showModal"] = {
    init: () => { },
    update: (element, valueAccessor) => {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element)["modal"]('show');
            $("input", element).focus();
        }

        else $(element)["modal"]('hide');
    }
};

ko.applyBindings(new NavVM());