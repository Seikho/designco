var cfg = require("ls-config");
function authHost() {
    return "http://localhost:" + cfg.config("authPort") + "/register";
}
module.exports = authHost;
//# sourceMappingURL=authHost.js.map