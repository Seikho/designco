// This module to be moved then refactored for security purposes
import Promise = require("bluebird");
var md5 = require("js-md5");
var jwt = require("jsonwebtoken");
export = {
	create: createToken,
	verify: verifyToken
}

var creds = {
	username: "1",
	password: "2"
};

var saltedPw = getRandomSalt("2");

createToken(creds)
	.then(token => verifyToken(saltedPw, token))
	.then(() => console.log("all ok"))
	.catch(err => console.log("not ok! ", err));


function createToken(loginRequest: App.Login) {
	var salt = getRandomSalt(loginRequest.password);
	var token = jwt.sign({ username: loginRequest.username }, salt);
	return Promise.resolve(token);
}

function getRandomSalt(suffix: string) {
	var prefix = "longshotSalt!" + suffix;
	return md5(prefix);
}

function verifyToken(secret: string, token: string) {
	return new Promise((resolve, reject) => {
		verifyPromise(secret, token, resolve, reject)
	});
}

function verifyPromise(secret, token, resolve, reject) {
	jwt.verify(token, secret, err => {
		if (err) reject(err);
		resolve(true);
	});
}