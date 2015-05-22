var chalk = require("chalk");
function info(message) {
    log(message, chalk.blue);
}
function warn(message) {
    log(message, chalk.yellow);
}
function error(message) {
    log(message, chalk.red);
}
function debug(message) {
    log(message, chalk.gray);
}
function log(message, colour) {
    console.log(colour(message));
}
