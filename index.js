// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date?", function(req, res) {
  const { date } = req.params;
  let timestamp;
  let inputType;

  if (!date) {
    timestamp = Date.now();

    const dateObj = new Date(timestamp);
    const utcString = dateObj.toUTCString();
    res.json({
      unix: parseInt(timestamp),
      utc: utcString
    })
  } 
  else if (!isNaN(date)) {
    timestamp = parseInt(date);
    inputType = 'unix';
  }
  else {
    timestamp = Date.parse(date);
    inputType = 'unix';
  }

  if (!isNaN(timestamp)) {
    const dateObj = new Date(timestamp);
    const utcString = dateObj.toUTCString();

    res.json({
      [inputType]: timestamp,
      utc: utcString
    });
  } else {
    res.status(400).json({ error: "Invalid Date" });
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
