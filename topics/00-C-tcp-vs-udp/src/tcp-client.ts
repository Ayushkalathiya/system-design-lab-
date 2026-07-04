import net from "net";

// TCP Client — must establish connection first
const client = net.createConnection({ port: 4000 }, () => {
  console.log("Connected to TCP server");

  // TODO: Send 5 messages, one per second
  // Hint: use setInterval and client.write()
  // After 5 messages, call client.destroy() to close
  let count = 0;
    
    const interval = setInterval(() => {
    if (count < 5) {
      const message = `Message ${count + 1}`;
      console.log(`Sending: ${message}`);
      client.write(message);
      count++;
    } else {
      clearInterval(interval);
      client.destroy(); // Close the connection after sending 5 messages
    }
  }, 1000);
  

});


client.on("data", (data) => {
  console.log(`Server echoed: ${data.toString()}`);
});

client.on("close", () => {
  console.log("Connection closed");
});
