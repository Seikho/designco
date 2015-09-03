import db = require("../../store/db");
import Promise = require("bluebird");
import request = require("request");
import cfg = require("ls-config");
import authApi = require("ls-auth-api");
export = register;

function register(register: App.Register): Promise<number> {
    if (!isValidRequest(register))
        return Promise.reject("[AUTH] Missing required fields");
        
    var passwordsMatch = register.password === register.matchPassword;
    if (!passwordsMatch) return Promise.reject("[AUTH] Passwords do not much");
        
    return authApi.register({
        username: register.username,
        password: register.password
    });
}

function isValidRequest(register: App.Register) {
    var isValid = (!!register.username && !!register.password && !!register.matchPassword);
    return isValid;
}
