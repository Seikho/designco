import store = require("ls-events");
import log = require("ls-logger");
import cfg = require("ls-config");
export = find;

store.psub("services/start/auth", eventHandler);

function eventHandler(pattern, channel, message: any) {
	var port = message.port;
	cfg.config("authPort", port);
	log.info("Auth started event received. Port: " + port);
}

function find() {
	store.fetch("services", "start", "auth")
		.then(setLatestPort);
}

function setLatestPort(fetchResults: store.FetchResult[]) {
	log.debug("Running");

	if (fetchResults.length === 0) {
		log.error("The auth service has not emitted any 'start' events");
		return null;
	}
	var reduction = (prev, curr, i) => {
		var isCurrentHigher = curr.published > prev.published;
		return isCurrentHigher ? curr : prev;
	};
	
	var mostRecent = fetchResults.reduce(reduction);
	cfg.config("authPort", mostRecent.data.port);
	log.info("Auth service most recent port: " + mostRecent.data.port);
}