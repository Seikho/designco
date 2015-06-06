var client = require("./client");
function subscribe(channels, callback) {
    var redisClient = client();
    if (channels instanceof Array)
        channels.forEach(function (c) { return redisClient.subscribe(c, callback); });
    else
        redisClient.subscribe(channels, callback);
}
module.exports = subscribe;
