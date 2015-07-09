export enum Event {
	Create,
	Read,
	Update,
	Delete,
	Notification
}

export enum Context {
	User,
	Order,
	Item
}

export enum ActiveState {
	Inactive,
	Active
}

export enum ItemType {
	Screen
}

export enum OrderState {
	NotSubmitted,
	Submitted,
	Processed,
	Completed,
	Cancelled
}