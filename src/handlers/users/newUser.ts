import db = require("../../store/db");
import store = require("designco-store");

store.sub("users/create", createUser);

function createUser(message: string) {
	// var parsedMsg: DesignCo.EventMessage = JSON.parse(message);
	// var user: DesignCo.User = parsedMsg.data;
	// delete user.id;
	
	// return db("users").insert(user).then();
}