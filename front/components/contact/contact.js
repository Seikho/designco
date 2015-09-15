var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ko = require("knockout");
var $ = require("jquery");
var Lists = require("ls-ko-lists");
var ContactForm = (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        _super.call(this);
        this.name = ko.observable("");
        this.email = ko.observable("");
        this.message = ko.observable("");
    }
    ContactForm.prototype.saveToModel = function () {
        var name = this.name();
        var email = this.email();
        var message = this.message();
        return {
            name: name, email: email, message: message
        };
    };
    ContactForm.prototype.send = function () {
        $.post("/contact");
    };
    return ContactForm;
})(Lists.Model);
//# sourceMappingURL=contact.js.map