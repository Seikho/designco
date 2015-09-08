var Promise = require("bluebird");
var fs = require("fs");
var cfg = require("ls-config");
function init() {
    return Promise
        .all([
        isFilePresent(cfg.config("designcoLive")),
        isFilePresent(cfg.config("designcoBase"))
    ])
        .then(createDatabase);
}
function createDatabase(exists) {
    var liveExists = exists[0];
    var baseExists = exists[1];
    if (liveExists)
        return Promise.resolve(false);
    if (!baseExists)
        return Promise.reject("Unable to create live database: Base does not exist");
    fs.createReadStream(cfg.config("designcoLive"))
        .pipe(fs.createWriteStream(cfg.config("designcoBae")));
    return Promise.resolve(true);
}
function isFilePresent(filename) {
    var promise = new Promise(function (rs) { return filePromise(rs, filename); });
    return promise;
}
function filePromise(resolve, filename) {
    fs.readFile(filename, function (err) {
        if (err)
            resolve(false);
        else
            resolve(true);
    });
}
module.exports = init;
//# sourceMappingURL=init.js.map