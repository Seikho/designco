import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
export = login;

function login(login: App.Login): Promise<boolean> {
    if (!isValidRequest(login)) return Promise.resolve(false);

    var promise = new Promise<boolean>((resolve, reject) => {
        var handler = (error, response, body) => {
			if (error) return reject(error);
			resolve(body);
        };

		request.post(authHost(), login, handler);
    });

	return promise;
}

function requestHandler(error, response, body) {

}

function authHost() {
    return "http://localhost:" + cfg.config("authPort") + "/authenticate";
}

function isValidRequest(login: App.Login) {
    var isFieldsMissing = (login.username == null || login.password == null);
    return isFieldsMissing;
}
