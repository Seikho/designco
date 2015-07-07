import knex = require("knex");
import cfg = require("ls-config");
export = db;

var db = knex({
    client: "sqlite3",
    connection:{
        filename: cfg.config("liveDatabase")
    }
});
