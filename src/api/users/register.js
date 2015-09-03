var Promise = require("bluebird");
var authApi = require("ls-auth-api");
function register(register) {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Missing required fields");
    var passwordsMatch = register.password === register.matchPassword;
    if (!passwordsMatch)
        return Promise.reject("[AUTH] Passwords do not much");
    return authApi.register({
        username: register.username,
        password: register.password
    });
}
function isValidRequest(register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
module.exports = register;
//# sourceMappingURL=register.js.map