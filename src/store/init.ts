import Promise = require("bluebird");
import fs = require("fs");
import log = require("ls-logger");
import cfg = require("ls-config")
export = init;

function init() {

    var promiseArray = [
        isFilePresent(liveDatabaseName()),
        isFilePresent(baseDatabaseName())
    ];

    return Promise.all(promiseArray)
        .then(createDatabase);
}


function createDatabase(exists: boolean[]) {
    var liveExists = exists[0];
    var baseExists = exists[1];

    if (liveExists) return Promise.resolve(false);
    if (!baseExists) return Promise.reject("Unable to create live database: Base does not exist");

    fs.createReadStream(baseDatabaseName())
        .pipe(fs.createWriteStream(liveDatabaseName()));

    return Promise.resolve(true);
}

function isFilePresent(filename: string) {
    var promise = new Promise(rs => filePromise(rs, filename));
    return promise;
}

function filePromise(resolve, filename) {
    fs.readFile(filename, err => {
        if (err) resolve(false);
        else resolve(true);
    });
}

function liveDatabaseName() {
    return cfg.config("liveDatabase");
}

function baseDatabaseName() {
    return cfg.config("baseDatabase");
}
