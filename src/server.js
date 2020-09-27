const express = require("express");

const server = express();
const PORT = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.send("I am working");
});

server.listen(PORT, () => {
  console.log("Listening...")
})