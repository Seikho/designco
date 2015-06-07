export = AppEvent;
enum AppEvent {
	NewUser = <any>"/user/new/*",
	UpdateUser = <any>"/user/update/*",
	NewOrder = <any>"/order/new/*",
	UpdateOrder = <any>"/order/update/*",
	CancelOrder = <any>"/order/cancel/*"
}