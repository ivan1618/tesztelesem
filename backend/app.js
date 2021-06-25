const express = require("express");
const Uzenet = require("./models/uzenetek");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

const app = express();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oldaluzeno@gmail.com",
    pass: "Tesztszerver01",
  },
});

mongoose
  .connect(
    "mongodb+srv://ivan:V9ikn3SoZKdDTYWC@cluster0.u2mms.mongodb.net/Uzenetekes?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((response) => {
    console.log("connected to database");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/emailek", (req, res, next) => {
  const emailopt = {
    from: "kinght.ivan@gmail.com",
    to: "uplay.ivan@gmail.com",
    subject: req.body.subject,
    text: req.body.text,
  };
  transporter.sendMail(emailopt, (err, info) => {
    if (err) {
      console.log(err);
    } else {
    }
  });
});

app.post("/api/uzenetek", (req, res, next) => {
  const uzenet = new Uzenet({
    uzenete: req.body.uzenete,
    nev: req.body.nev,
    jelszo: req.body.jelszo,
  });

  uzenet.save();

  res.status(201).json({
    message: "sikeres volt",
  });
});

app.get("/api/uzenetek/:nev", (req, res, next) => {
  Uzenet.find({ nev: req.params.nev }).then((documents) => {
    res.status(200).json({
      message: "Sikeres volt",
      uzenetek: documents,
    });
  });
});

app.delete("/api/uzenetek/:_id", (req, res, next) => {
  Uzenet.deleteOne({ _id: req.params._id }).then();
  res.status(200).json({ message: "Törölve" });
});

module.exports = app;
