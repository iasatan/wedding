const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const attendee = require("./server/api/Attendee");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use("/api/attendee", attendee);
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})
app.listen(port, () => console.log('Server running on ' + port + "..."));