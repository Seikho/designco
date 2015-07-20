declare var System: any;

declare module "angular-ui-router" {
	var router: any;
	export { router as default }
}

declare module "angular" {
	var angular: any;
	export { angular as default }
}

declare module "angular-material" {
	var material: any;
	export { material as default }
}

declare module App {

	export interface User {
		displayName: string;
		username: string;
		email: string;
		password: string;
		enabled: number;
		company?: string;
	}
	
	export interface Order {
		id?: number;
		userId: number;
		orderState: string;
		createdDate: number;
		lastModified: number; 
	}
	
	export interface Item {
		id?: number;
		itemType: string;
		description: string;
		itemState: number;
	}
	
	export interface OrderItem {
		id?: number;
		orderId: number;
		itemId: number;
	}
	
	export interface Login {
		username: string;
		password: string;
	}

	export interface Register extends Login{
		matchPassword: string;
	}
}
