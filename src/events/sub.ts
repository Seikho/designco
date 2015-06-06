import client = require("./client");
export = subscribe;

function subscribe(channels: string|string[], callback: (message: string) => void) {
	var redisClient = client();

	if (channels instanceof Array)
		channels.forEach(c => redisClient.subscribe(c, callback));
	else redisClient.subscribe(channels, callback);
	
}

