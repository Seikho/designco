var knex = require("knex");
var cfg = require("designco-config");
var db = knex({
    client: "sqlite3",
    connection: {
        filename: cfg.config("liveDatabase")
    }
});
module.exports = db;
