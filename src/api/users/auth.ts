import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");

function login(login: App.Login) {
	if (!isValidRequest(login)) return Promise.resolve(false);


}

function authHost() {
	return "http://localhost:" + cfg.config("authPort");
}

function isValidRequest(login: App.Login) {
	var isFieldsMissing = (login.username == null || login.password == null);
	return isFieldsMissing;
}
