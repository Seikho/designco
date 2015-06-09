import client = require("./client");
import log = require("")
import Promise = require("bluebird");
export = publish;

function publish(event: DesignCo.AppEvent) {
	var redisClient = client();

	redisClient.on("connect", () => {
		var channel = event.context + "/" + event.event + "/" + event.key;
		var message = JSON.stringify(event.data);
		var store = event.context + "/" + event.key;

		redisClient.rpush([store, '"' + message + '"'], (err, res) => {
			if (err) throw "PublishException: Unable to RPUSH: " + err;
			else redisClient.publish(channel, message);
		});
	});

	redisClient.on("error", err => {
		global.log.error("[PUB] RedisClient Error: " + err);
	});
}