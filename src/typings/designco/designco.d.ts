declare module App {

	export interface User {
		displayName: string;
		username: string;
		email: string;
		password: string;
		enabled: number;
		company?: string;
	}

	export const enum Event {
		Create,
		Read,
		Update,
		Delete,
		Notification
	}

	export const enum Type {
		User,
		Order,
		Item
	}

	export interface Login {
		username: string;
		password: string;
	}

	export interface Register extends Login{
		matchPassword: string;
	}
}
