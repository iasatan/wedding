if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const attendee = require("./server/api/Attendee");
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
    to: 'adam.satan@hu.bosch.com', // Change to your recipient
    from: 'satanadam@outlook.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const msg2 = {
    to: 'satanadam@outlook.com', // Change to your recipient
    from: 'satanadam@outlook.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
app.use("/api/attendee", attendee);
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})
app.listen(port, () => {
    console.log('Server running on ' + port + "...")
    sgMail.send(msg)
    .then((res)=>{
        console.log(res[0].statusCode)
        console.log(res[0].headers)
    }).catch(err=>console.log(err));
    sgMail.send(msg2)
    .then((res)=>{
        console.log(res[0].statusCode)
        console.log(res[0].headers)
    }).catch(err=>console.log(err));
});