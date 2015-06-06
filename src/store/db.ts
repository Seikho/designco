import knex = require("knex");
export = db;

var db = knex({
    client: "sqlite3",
    connection:{
        filename: "./designco.db"
    }
});
