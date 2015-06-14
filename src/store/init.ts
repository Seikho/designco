import fs = require("fs");
import log = require("ls-logger");
import cfg = require("ls-config")
export = init;

function init() {
    var liveDb = cfg.config("liveDatabase");
    var baseDb = cfg.config("baseDatabase");
    
    fs.readFile(liveDb, (err, data) => {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            log.info("Database not detected. Created.");
        } else log.info("Database detected.");
    });
}
