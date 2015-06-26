var Promise = require("bluebird");
var request = require("request");
var cfg = require("ls-config");
function login(login) {
    if (!isValidRequest(login))
        return Promise.resolve(false);
    var promise = new Promise(function (resolve, reject) {
        var handler = function (error, response, body) {
            if (error)
                return reject(error);
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
function isValidRequest(login) {
    var isFieldsMissing = (login.username == null || login.password == null);
    return isFieldsMissing;
}
