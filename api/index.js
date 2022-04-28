const express = require('express');
const mongoose = require("mongoose")
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();
const router = express.Router();
const port = 3000;
const tasks = require("./model");
var url = 'mongodb://root:password@mongodb:27017';
let cors = require("cors")

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use(cors({origin: '*'}));
app.use("/", router);
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('TEST APIIII')
});

router.route("/fetchdata").get(function(req, res) {
  tasks.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/setdata").get(async function(req, res) {
  let res1 = req.params;
  console.log("set data 1", res1);
  // const test = new tasks({ contenu:'aaaaaaaaaaa' });
  // await test.save();
  res.send("WORKINGGGG SET DATA");
});


app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});