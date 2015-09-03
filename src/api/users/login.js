var Promise = require("bluebird");
var authApi = require("ls-auth-api");
function authenticate(login) {
    if (!isValidRequest(login))
        return Promise.reject("[AUTH] Must supply username and password");
    return authApi.login(login.username, login.password);
}
function isValidRequest(login) {
    var isValid = (!!login.username && !!login.password);
    return isValid;
}
module.exports = authenticate;
//# sourceMappingURL=login.js.map