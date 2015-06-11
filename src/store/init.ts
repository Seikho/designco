import fs = require("fs");
import log = require("designco-logger");
export = init;

function init() {
    var liveDb = "designco.db";
    var baseDb = "designco-base.sqlite";
    
    fs.readFile(liveDb, (err, data) => {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            log.info("Live database not detected. Created.");
        } else log.info("Live database detected.");
    });
}
