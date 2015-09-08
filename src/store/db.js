var knex = require("knex");
var cfg = require("ls-config");
var db = knex({
    client: "sqlite3",
    connection: {
        filename: cfg.config("designcoLive")
    }
});
module.exports = db;
//# sourceMappingURL=db.js.map