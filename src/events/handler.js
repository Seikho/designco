var events = require("./events");
var sub = global.sub;
sub(events.NewUser.toString(), function (user) {
    global.log.info(user);
});
