var Promise = require("bluebird");
var request = require("request");
var cfg = require("ls-config");
function authenticate(login) {
    if (!isValidRequest(login))
        return Promise.reject("[AUTH] Must supply username and password");
    var promise = new Promise(function (resolve, reject) {
        var handler = function (error, response, body) {
            if (error)
                return reject("[AUTH-API] " + error);
            resolve(body);
        };
        var formData = {
            form: login
        };
        request.post(authHost(), formData, handler);
    });
    return promise;
}
function authHost() {
    return "http://localhost:" + cfg.config("authPort") + "/login";
}
function isValidRequest(login) {
    var isValid = (!!login.username && !!login.password);
    return isValid;
}
module.exports = authenticate;
