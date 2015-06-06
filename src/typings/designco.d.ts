/// <reference path="node/node.d.ts" />
/// <reference path="bluebird/bluebird.d.ts" />

declare module NodeJS {
	export interface Global {
		publish(payloads: ProduceRequest[]): Promise<{}>;
		subscribe(topic: string, callback: (message: string) => void);
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

interface ProduceRequest {
	topic: string;
	messages: any; // Array<string> | Array<KeyedMessage> | string | KeyedMessage
	partition?: number;
	attributes?: number;
}

interface Config {
	port?: number;
	redisPort?: number;
	redisHost?: string;
}