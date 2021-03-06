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

	export interface Register extends Login {
		matchPassword: string;
	}
    
    export interface CartItem extends Item {
        cartItemId: number;
        quantity: number;
    }
    
    interface ListOptions {
        /** The absolute url to the GET route for the base model T */
        url: string;
    }
}
