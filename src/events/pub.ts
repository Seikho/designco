import redis = require("redis");
import client = require("./client");
import log = require("")
import Promise = require("bluebird");
export = publish;

function publish(channel: string, messages: string|string[]) {
	var redisClient = client();
	
	if (messages instanceof String) {
		redisClient.publish(channel, messages);
	} else if(messages instanceof Array) {
		messages.forEach(message => redisClient.publish(channel, message));
	}

}