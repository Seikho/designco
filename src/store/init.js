var fs = require("fs");
var log = require("ls-logger");
var cfg = require("ls-config");
function init() {
    var liveDb = cfg.config("liveDatabase");
    var baseDb = cfg.config("baseDatabase");
    fs.readFile(liveDb, function (err, data) {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            log.info("Database not detected. Created.");
        }
        else
            log.info("Database detected.");
    });
}
module.exports = init;
