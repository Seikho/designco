import fs = require("fs");
export = init;

var liveDb = global.config.liveDatabase;
var baseDb = global.config.baseDatabase;

function init() {
    fs.readFile(global.config.liveDatabase, (err, data) => {
        if (err) {
            fs.createReadStream(liveDb).pipe(fs.createWriteStream(liveDb));
            global.log.info("Live database not detected. Created.");
        }
    });
}
