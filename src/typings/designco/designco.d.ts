declare var async: any;
declare var await: any;

export module Designco {
	export interface User {
		username: string;
		email: string;
		displayName: string;
		status: UserStatus;
		password: string;
	}
	
	export const enum UserStatus {
		Inactive,
		Active,
		Pending
	}
	
	
}