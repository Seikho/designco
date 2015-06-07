var db = require("../../store/db");
var events = require("../../events/events");
global.sub(events.NewUser.toString(), createUser);
function createUser(message) {
    var parsedMsg = JSON.parse(message);
    var user = parsedMsg.data;
    delete user.id;
    return db("users").insert(user).then();
}
