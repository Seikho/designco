import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
import authHost = require("../authHost");
export = authenticate;

function authenticate(login: App.Login): Promise<boolean> {
    if (!isValidRequest(login)) return Promise.reject("[AUTH] Must supply username and password");

    var promise = new Promise<boolean>((resolve, reject) => {
        var handler = (error, response, body) => {
			if (error) return reject("[AUTH-API] " + error);
			resolve(body);
        };
		var formData = {
			form: login
		};

		request.post(authHost(), formData, handler);
    });

	return promise;
}

function isValidRequest(login: App.Login) {
    var isValid = (!!login.username && !!login.password);
    return isValid;
}
