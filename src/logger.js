var chalk = require("chalk");
function info(message) {
    log("INFO", message, chalk.blue);
}
exports.info = info;
function warn(message) {
    log("WARN", message, chalk.yellow);
}
exports.warn = warn;
function error(message) {
    log("ERROR", message, chalk.red);
}
exports.error = error;
function debug(message) {
    log("DEBUG", message, chalk.gray);
}
exports.debug = debug;
function log(prefix, message, colour) {
    var timestamp = new Date().toTimeString().slice(0, 8);
    console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}
