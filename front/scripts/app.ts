import NavVM = require("../components/nav/nav");
import ko = require("knockout");
import modal = require("../components/modal/component");

ko.applyBindings(new NavVM());
ko.components.register("modal", modal);