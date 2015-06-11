var fs = require("fs");
var log = require("designco-logger");
function init() {
    var liveDb = "designco.db";
    var baseDb = "designco-base.sqlite";
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
