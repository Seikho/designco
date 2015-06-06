/// <reference path="node/node.d.ts" />
/// <reference path="bluebird/bluebird.d.ts" />
/// <reference path="redis/redis.d.ts" />

declare module NodeJS {
	export interface Global {
		pub(channel: string, messages: string|string[]);
		sub(channel: string, callback: (channel: string, message: string) => void);
		log: Logger;
		config: Config;
	}
}

interface Logger {
	info(message: string): void;
	warn(message: string): void;
	error(message: string): void;
	debug(message: string): void;
}

interface Config {
	port?: number;
	redisPort?: number;
	redisHost?: string;
	baseDatabase: string;
	liveDatabase: string;
}

declare module DesignCo {
	export interface User {
		id: number;
		displayName: string;
		username?: string;
		email: string;
		password: string;
		enabled: number;
	}
}

