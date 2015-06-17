import db = require("../../store/db");
import Promise = require("bluebird");

function login(login: App.Login) {
	if (!isValidRequest(login)) return Promise.resolve(false);
	
	getUser(login.username)
		.then(user => loginHandler(user, login.password))
		// then create session
}

function getUser(username: string) {
	return db("users")
		.select("password")
		.where({ username: username });
}

function loginHandler(user: { password: string }, password: string) {
	var isCorrect = user.password === password;
	return Promise.resolve(isCorrect);
}

function isValidRequest(login: App.Login) {
	var isFieldsMissing = (login.username == null || login.password == null);
	return isFieldsMissing;
}