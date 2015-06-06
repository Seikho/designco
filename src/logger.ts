import chalk = require("chalk");

export function info(message) {
    log("INFO", message, chalk.blue);
}

export function warn(message) {
    log("WARN", message, chalk.yellow);
}

export function error(message) {
    log("ERROR", message, chalk.red);
}

export function debug(message) {
    log("DEBUG", message, chalk.gray);
}

function log(prefix, message, colour) {
    var timestamp = new Date().toTimeString().slice(0,8);
    console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}
