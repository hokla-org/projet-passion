const http = require("http");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());

var corsOptions = {
  origin: null,
  optionsSuccessStatus: 200,
};

app.get("/", cors(corsOptions), function (req, res) {
  res.end("Hello world !");
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
