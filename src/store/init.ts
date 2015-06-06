import fs = require("fs");
export = init;

function init() {
    var liveDb = global.config.liveDatabase;
    var baseDb = global.config.baseDatabase;
    
    fs.readFile(global.config.liveDatabase, (err, data) => {
        if (err) {
            fs.createReadStream(baseDb).pipe(fs.createWriteStream(liveDb));
            global.log.info("Live database not detected. Created.");
        } else global.log.info("Live database detected.");
    });
}
