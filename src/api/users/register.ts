import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
import authHost = require("../authHost");
export = register;

function register(register: App.Register): Promise<boolean> {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Missing required fields");

    var promise = new Promise<boolean>((resolve, reject) => {
        var handler = (error, response, body) => {
			if (error) return reject("[API] " + error);
			resolve(body);
        };
		var formData = {
			form: register
		};

		request.post(authHost(), formData, handler);
    });

	return promise;
}



function isValidRequest(register: App.Register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
