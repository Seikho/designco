var Promise = require("bluebird");
var request = require("request");
var cfg = require("ls-config");
function register(register) {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Must supply username, password and matching password");
    var promise = new Promise(function (resolve, reject) {
        var handler = function (error, response, body) {
            if (error)
                return reject("[AUTH-API] " + error);
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
function isValidRequest(register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
module.exports = register;
