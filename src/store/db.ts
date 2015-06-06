import knex = require("knex");
import fs = require("fs");
import path = require("path");
export = db;

var rootPath = path.resolve(__dirname, "../..");
var baseDb = path.join(rootPath, "designco-base.sqlite");
var liveDb = path.join(rootPath, "designco.db");

fs.readFile(liveDb, (err, data) => {
   if (err) {
       fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
       global.log.info("Live database not detected. Created.");
   } 
});

var db = knex({
    client: "sqlite3",
    connection:{
        filename: liveDb
    }
});
