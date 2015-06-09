var events = require("../../events/events");
global.sub(events.NewUser.toString(), createUser);
function createUser(message) {
    // var parsedMsg: DesignCo.EventMessage = JSON.parse(message);
    // var user: DesignCo.User = parsedMsg.data;
    // delete user.id;
    // return db("users").insert(user).then();
}
