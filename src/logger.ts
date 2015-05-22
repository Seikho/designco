import chalk = require("chalk");

function info(message: string) {
	log(message, chalk.blue);
}

function warn(message: string) {
	log(message, chalk.yellow);
}

function error(message: string) {
	log(message, chalk.red);
}

function debug(message: string) {
	log(message, chalk.gray);
}

function log(message: string, colour: Chalk.ChalkChain) {
	console.log(colour(message));
}