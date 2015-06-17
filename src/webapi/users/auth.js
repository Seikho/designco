var db = require("../../store/db");
var Promise = require("bluebird");
function login(login) {
    if (!isValidRequest(login))
        return Promise.resolve(false);
    getUser(login.username)
        .then(function (user) { return loginHandler(user, login.password); });
    // then create session
}
function getUser(username) {
    return db("users")
        .select("password")
        .where({ username: username });
}
function loginHandler(user, password) {
    var isCorrect = user.password === password;
    return Promise.resolve(isCorrect);
}
function isValidRequest(login) {
    var isFieldsMissing = (login.username == null || login.password == null);
    return isFieldsMissing;
}
