// This module to be moved then refactored for security purposes
var Promise = require("bluebird");
var md5 = require("js-md5");
var jwt = require("jsonwebtoken");
function createToken(loginRequest) {
    var salt = getRandomSalt(loginRequest.password);
    var token = jwt.sign({ username: loginRequest.username }, loginRequest.password);
    return Promise.resolve(token);
}
function getRandomSalt(suffix) {
    var prefix = "longshotSalt!" + suffix;
    return md5(prefix);
}
function verifyToken(secret, token) {
    return new Promise(function (resolve, reject) {
        verifyPromise(secret, token, resolve, reject);
    });
}
function verifyPromise(secret, token, resolve, reject) {
    jwt.verify(token, secret, function (err) {
        if (err)
            reject(err);
        resolve(true);
    });
}
module.exports = {
    create: createToken,
    verify: verifyToken
};
