import dgram from "dgram";


// UDP Client — no connection needed, just fire and forget
const client = dgram.createSocket("udp4");

// TODO: Send 5 messages to the UDP server, one per second
// Hint: client.send(message, port, host, callback)
// After 5 messages, call client.close()
let count = 0;

const interval = setInterval(() => {
  if (count < 5) {
    const message = Buffer.from(`Message ${count + 1}`);
    console.log(`Sending: ${message.toString()}`);
    client.send(message, 4001, "localhost", (err) => {
      if (err) {
        console.error(`Error sending message: ${err.message}`);
      }
    });
    count++;
  } else {
    clearInterval(interval);
    client.close(); // Close the socket after sending 5 messages
  }
}, 1000);

