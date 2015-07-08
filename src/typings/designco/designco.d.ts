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
		id: number;
		userId: number;
		orderState: string;
		createdDate: number; // Date.now() 
	}
	
	export interface Item {
		id: number;
		itemType: string;
		description: string;
		itemState: number;
	}
	
	export interface OrderItem {
		id: number;
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
	
	export interface Screen {
		id: number;
		description: string;
		isActive: number;
	}
}
