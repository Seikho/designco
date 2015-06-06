import client = require("./client");
import log = require("")
import Promise = require("bluebird");
export = publish;

function publish(channel: string, messages: string|string[]) {
	var redisClient = client();

	redisClient.on("connect", () => {
		if (typeof messages === 'string') {
			redisClient.publish(channel,messages);		
		} else if (messages instanceof Array) {
			messages.forEach(message => redisClient.publish(channel, message));
		}
	});
	
	redisClient.on("error", err => {
		global.log.error("[PUB] RedisClient Error: " + err);
	});

}