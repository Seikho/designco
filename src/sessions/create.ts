// This module to be moved then refactored for security purposes

var md5 = require("js-md5");
var jwt = require("jsonwebtoken");

function createHash(loginRequest: App.Login) {
	var salt = getRandomSalt(loginRequest.password);
	var token = jwt.sign({ username: loginRequest.username }, loginRequest.password);
	
	console.log(token);
}

function getRandomSalt(suffix: string) {
	var prefix = "longshotSalt!" + suffix;
	return md5(prefix);
}