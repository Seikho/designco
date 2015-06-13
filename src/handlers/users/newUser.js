var store = require("ls-events");
store.sub("users/create", createUser);
function createUser(message) {
    // var parsedMsg: DesignCo.EventMessage = JSON.parse(message);
    // var user: DesignCo.User = parsedMsg.data;
    // delete user.id;
    // return db("users").insert(user).then();
}
