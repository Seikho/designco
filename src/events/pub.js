var client = require("./client");
function publish(channel, messages) {
    var redisClient = client();
    if (messages instanceof String) {
        redisClient.publish(channel, messages);
    }
    else if (messages instanceof Array) {
        messages.forEach(function (message) { return redisClient.publish(channel, message); });
    }
}
module.exports = publish;
