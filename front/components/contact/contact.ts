import ko = require("knockout");
import $ = require("jquery");
import Lists = require("ls-ko-lists");
class ContactForm extends Lists.Model {
	constructor(){
		super();
	}
	
	name = ko.observable("");
	email = ko.observable("");
	message = ko.observable("");
	
	saveToModel() {
		var name = this.name();
		var email = this.email();
		var message = this.message();
		
		return {
			name, email, message
		};
	}
	
	send() {
		$.post("/contact")
	}
}