var fs = require("fs");
var liveDb = global.config.liveDatabase;
var baseDb = global.config.baseDatabase;
function init() {
    fs.readFile(global.config.liveDatabase, function (err, data) {
        if (err) {
            fs.createReadStream(liveDb).pipe(fs.createWriteStream(liveDb));
            global.log.info("Live database not detected. Created.");
        }
    });
}
module.exports = init;
