import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
export = register;

function register(register: App.Register): Promise<boolean> {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Missing required fields");

    var promise = new Promise<boolean>((resolve, reject) => {
        var handler = (error, response, body) => {
			if (error) return reject("[AUTH-API] " + error);
			resolve(body);
        };
		var formData = {
			form: register
		};

		request.post(authHost(), formData, handler);
    });

	return promise;
}

function authHost() {
    return "http://localhost:" + cfg.config("authPort") + "/register";
}

function isValidRequest(register: App.Register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
