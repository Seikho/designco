var fs = require("fs");
var log = require("ls-logger");
var cfg = require("ls-config");
function init() {
    var liveDb = cfg.config("liveDatabase");
    var baseDb = cfg.config("baseDatabase");
    fs.readFile(liveDb, function (err, data) {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            log.info("Live database not detected. Created.");
        }
        else
            log.info("Live database detected.");
    });
}
module.exports = init;
