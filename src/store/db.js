var knex = require("knex");
var db = knex({
    client: "sqlite3",
    connection: {
        filename: global.config.liveDatabase
    }
});
module.exports = db;
