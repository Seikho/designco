import db = require("../store/db");
import events = require("./events");
var sub = global.sub;

sub(events.NewUser.toString(), user => {
	global.log.info(user);
});