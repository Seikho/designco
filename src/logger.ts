import chalk = require("chalk");
export function info(message: string) {
	log("INFO", message, chalk.blue);
}

export function warn(message: string) {
	log("WARN", message, chalk.yellow);
}

export function error(message: string) {
	log("ERROR", message, chalk.red);
}

export function debug(message: string) {
	log("DEBUG", message, chalk.gray);
}

function log(prefix: string, message: string, colour: Chalk.ChalkChain) {
	var timestamp = new Date().toLocaleTimeString().slice(0,8);
	console.log("[%s] %s: %s", timestamp, colour(prefix), message);
}