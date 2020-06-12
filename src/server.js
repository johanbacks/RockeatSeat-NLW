const express = require("express");
const server = express();

server.get("/" , (req, res ) => {
  res.send("Ola Dev")
})
server.listen(3000)