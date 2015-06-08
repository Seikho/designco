var client = require("./client");
function patternSubscribe(channels, callback) {
    var redisClient = client();
    redisClient.on("ready", function () {
        if (channels instanceof Array)
            channels.forEach(function (c) { return redisClient.psubscribe(c); });
        else
            redisClient.psubscribe(channels);
    });
    redisClient.on("psubscribe", function (channel, count) {
        global.log.debug("Client successfully subscribed to '" + channel + "' (" + count + ")");
    });
    redisClient.on("pmessage", function (channel, pattern, message) {
        callback(channel, pattern, message);
    });
    redisClient.on("error", function (err) {
        global.log.error("[SUB] RedisClient error: " + err);
    });
}
module.exports = patternSubscribe;
