var Promise = require("bluebird");
var request = require("request");
var authHost = require("../authHost");
function register(register) {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Missing required fields");
    var promise = new Promise(function (resolve, reject) {
        var handler = function (error, response, body) {
            if (error)
                return reject("[API] " + error);
            resolve(body);
        };
        var formData = {
            form: register
        };
        request.post(authHost(), formData, handler);
    });
    return promise;
}
function isValidRequest(register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
module.exports = register;
//# sourceMappingURL=register.js.map