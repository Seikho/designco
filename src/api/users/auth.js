var Promise = require("bluebird");
var cfg = require("ls-config");
function login(login) {
    if (!isValidRequest(login))
        return Promise.resolve(false);
}
function authHost() {
    return "http://localhost:" + cfg.config("authPort");
}
function isValidRequest(login) {
    var isFieldsMissing = (login.username == null || login.password == null);
    return isFieldsMissing;
}
