var knex = require("knex");
var fs = require("fs");
var path = require("path");
var rootPath = path.resolve(__dirname, "../..");
var baseDb = path.join(rootPath, "designco-base.sqlite");
var liveDb = path.join(rootPath, "designco.db");
fs.readFile(liveDb, function (err, data) {
    if (err) {
        fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
        global.log.info("Live database not detected. Created.");
    }
});
var db = knex({
    client: "sqlite3",
    connection: {
        filename: liveDb
    }
});
module.exports = db;
