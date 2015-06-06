var events = require("./events");
var sub = global.subscribe;
sub(events.NewUser.toString(), function (user) {
    global.log.info(user);
});
