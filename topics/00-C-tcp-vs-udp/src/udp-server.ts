import dgram from "dgram";

// UDP Server
// - Connectionless: no handshake, just send and hope
// - Unreliable: no guarantee of delivery or order
// - Use: video/audio streaming, DNS, games, anything where speed > accuracy

const server = dgram.createSocket("udp4");

// TODO 1: When a message arrives, log who sent it and what they sent
// Hint: server.on("message", (msg, rinfo) => ...)
// rinfo = { address, port } — who sent it
server.on("message", (msg, rinfo) => {
    console.log(`Received from ${rinfo.address}:${rinfo.port}: ${msg.toString()}`);
});

// TODO 2: When server starts listening, log the port
server.on("listening", () => {
    console.log(`UDP server listening on port ${server.address().port}`);
});

// TODO 3: Handle errors
server.on("error", (err) => {
    console.error(`UDP server error: ${err.message}`);
});

server.bind(4001);
