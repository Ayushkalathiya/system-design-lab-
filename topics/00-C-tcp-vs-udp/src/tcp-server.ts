import net from "net";

// TCP Server
// - Connection-oriented: client must connect first
// - Reliable: guarantees delivery and order
// - Use: HTTP, databases, file transfer, anything where accuracy matters

const server = net.createServer((socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);

  // TODO 1: When data arrives, log it and echo it back to the client
  // Hint: socket.on("data", ...) and socket.write(...)
  socket.on("data", (data) => {
    console.log(`Received: ${data.toString()}`);
    socket.write(data); // Echo back to client

  });

  // TODO 2: When client disconnects, log it
  socket.on("close", () => {
    console.log(`Client disconnected: ${socket.remoteAddress}:${socket.remotePort}`);
  });

  // TODO 3: Handle errors so server doesn't crash
  socket.on("error", (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

server.listen(4000, () => {
  console.log("TCP server listening on port 4000");
});
