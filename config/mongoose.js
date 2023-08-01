const mongoose = require("mongoose");

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(
  "mongodb+srv://Sahil:GCP8q1we3kHGAA2F@cluster0.dkuhk1p.mongodb.net/Database?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
