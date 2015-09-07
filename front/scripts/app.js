var NavVM = require("../components/nav/nav");
var ko = require("knockout");
var modal = require("../components/modal/component");
var $ = require("jquery");
ko.applyBindings(new NavVM());
ko.components.register("modal", modal);
ko.bindingHandlers["showModal"] = {
    init: function () { },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element)["modal"]('show');
            $("input", element).focus();
        }
        else
            $(element)["modal"]('hide');
    }
};
//# sourceMappingURL=app.js.map