/// <reference path="bluebird/bluebird.d.ts" />
declare module NodeJS {
	export interface Global {
		publish(topic: string, messages: string|string[]): Promise<{}>;
		subscribe(topic: string, callback: (message: string) => void);
	}
}