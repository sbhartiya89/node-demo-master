var express = require("express");
var port = 3000;
var app = express();
app.get("/", (req, res) => {
  res.send("hello world how you all");
});
app.listen(port, () => {
  console.log("server running on port ", port);
});
