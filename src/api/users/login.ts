import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
import authApi = require("ls-auth-api");
export = authenticate;

function authenticate(login: App.Login): Promise<string> {
    if (!isValidRequest(login)) return Promise.reject("[AUTH] Must supply username and password");

	return authApi.login(login.username, login.password);
}

function isValidRequest(login: App.Login) {
    var isValid = (!!login.username && !!login.password);
    return isValid;
}
