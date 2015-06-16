var Promise = require("bluebird");
var fs = require("fs");
var cfg = require("ls-config");
function init() {
    var promiseArray = [
        isFilePresent(liveDatabaseName()),
        isFilePresent(baseDatabaseName())
    ];
    return Promise.all(promiseArray)
        .then(createDatabase);
}
function createDatabase(exists) {
    var liveExists = exists[0];
    var baseExists = exists[1];
    if (liveExists)
        return Promise.resolve(false);
    if (!baseExists)
        throw "Unable to create live database: Base does not exist";
    fs.createReadStream(baseDatabaseName())
        .pipe(fs.createWriteStream(liveDatabaseName()));
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
function liveDatabaseName() {
    return cfg.config("liveDatabase");
}
function baseDatabaseName() {
    return cfg.config("baseDatabase");
}
module.exports = init;
