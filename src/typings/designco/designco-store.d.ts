/// <reference path='../redis/redis.d.ts' />
declare module "designco-store" {
	import redis = require("redis");
	function client(): redis.RedisClient;
	function config(key: string, value?: string): string;
	function pub(event: AppEvent);
	function psub(channel: string, callback: (channel: string, pattern: string, message: string) => void);
	function sub(channel: string, callback: (channel: string, message: string) => void);
	function fetch(pattern: string, count?: number);

	const enum EventType {
		Create,
		Read,
		Update,
		Delete,
		Notification
	}

	interface AppEvent {
		event: EventType;
		context: EventContext;
		data: any;
		key: string|number;
	}

	const enum EventContext {
		User,
		Order,
		Item
	}
}

declare module Store {
	export interface StoreApi {
		config(key: string, value?: string): string;
		pub(event: AppEvent);
		psub(channel: string, callback: (channel: string, pattern: string, message: string) => void);
		sub(channel: string, callback: (channel: string, message: string) => void);
		fetch(pattern: string, count?: number);
	}

	export const enum EventType {
		Create,
		Read,
		Update,
		Delete,
		Notification
	}

	export interface AppEvent {
		event: EventType;
		context: EventContext;
		data: any;
		key: string|number;
	}

	export const enum EventContext {
		User,
		Order,
		Item
	}
}