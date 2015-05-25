var chalk = require("chalk");
function info(message) {
    log("INFO", message, chalk.blue);
}

function warn(message) {
    log("WARN", message, chalk.yellow);
}

function error(message) {
    log("ERROR", message, chalk.red);
}

function debug(message) {
    log("DEBUG", message, chalk.gray);
}

function log(prefix, message, colour) {
    var timestamp = new Date().toLocaleTimeString().slice(0, 8);
    console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}

module.exports = {
    info: info,
    warn: warn,
    error: error,
    debug: debug
}
