var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

var reservations = [{
	name: 'Team 7',
	phone: '888-111-2000',
	email: 'bestgroup@gmail.com',
	id: '1'
}];

var waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

// Get all characters
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});


app.post("/api/tables", function(req, res) {
  var newreservation = req.body;

  console.log(newreservation);

  reservations.push(newreservation);

  res.json(newreservation);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/waitlist", function(req, res) {
  var newwaitlist = req.body;

  console.log(newwaitlist);

  waitilist.push(newwaitlist);

  res.json(newwaitlist);
});


