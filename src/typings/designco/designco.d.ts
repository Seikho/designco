declare module App {

	export interface User {
		displayName: string;
		username: string;
		email: string;
		password: string;
		enabled: number;
		company?: string;
	}

	export interface Login {
		username: string;
		password: string;
	}

	export interface Register extends Login{
		matchPassword: string;
	}
	
	export interface Screen {
		id: number;
		description: string;
		isActive: number;
	}
}
