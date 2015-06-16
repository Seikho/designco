import server = require("./server");
import io = require("socket.io");
import events = require("ls-events");
import log = require("ls-logger");
import cfg = require("ls-config");
export = ioServer;

// Events API listener
server.connection({
    port: cfg.config("eventsPort"),
    labels: "events"
});

// Socket.IO listener
var ioServer = io(server.select("events").listener);

ioServer.on("connection", socket => {
    log.info("[CONNECTED] " + socket.id);
    socket.on("subscribe", msg => {
        log.info("[SOCKET:SUB] " + socket.id + ": " + msg);
        
        var options = JSON.parse(msg);
        
        // Subscribe the socket to the requested channel
        events.psub(options.channel, (ch, pt, msg) => {
            socket.emit(ch, msg);
        });
    });
    
});