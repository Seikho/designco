// This module to be moved then refactored for security purposes
var md5 = require("js-md5");
var jwt = require("jsonwebtoken");
console.log(createHash("test"));
function createHash(loginRequest) {
    var salt = getRandomSalt();
    var algorithm = getAlgorithm();
    var token = jwt.sign({ username: password }, password);
    console.log(token);
}
function getRandomSalt() {
    var prefix = "longshotSalt!";
    return md5(prefix);
}
function getAlgorithm() {
    return "RS256";
}
