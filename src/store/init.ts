import fs = require("fs");
import log = require("designco-logger");
import cfg = require("designco-config")
export = init;

function init() {
    var liveDb = cfg.config("liveDatabase");
    var baseDb = cfg.config("baseDatabase");
    
    fs.readFile(liveDb, (err, data) => {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            log.info("Live database not detected. Created.");
        } else log.info("Live database detected.");
    });
}
