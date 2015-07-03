import cfg = require("ls-config");
export = authHost;

function authHost() {
    return "http://localhost:" + cfg.config("authPort") + "/register";
}