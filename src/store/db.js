var knex = require("knex");
var db = knex({
    client: "sqlite3",
    connection: {
        filename: "./designco.db"
    }
});
module.exports = db;
