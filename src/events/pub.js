var client = require("./client");
function publish(event) {
    var redisClient = client();
    redisClient.on("connect", function () {
        var channel = event.context + "/" + event.event + "/" + event.key;
        var message = JSON.stringify(event.data);
        var store = event.context + "/" + event.key;
        redisClient.rpush([store, '"' + message + '"'], function (err, res) {
            if (err)
                throw "PublishException: Unable to RPUSH: " + err;
            else
                redisClient.publish(channel, message);
        });
    });
    redisClient.on("error", function (err) {
        global.log.error("[PUB] RedisClient Error: " + err);
    });
}
module.exports = publish;
