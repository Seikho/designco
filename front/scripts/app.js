var NavVM = require("../components/nav/nav");
var ko = require("knockout");
var modal = require("../components/modal/component");
ko.applyBindings(new NavVM());
ko.components.register("modal", modal);
//# sourceMappingURL=app.js.map