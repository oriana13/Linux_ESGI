const express = require('express');
const mongoose = require("mongoose")
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;
var url = 'mongodb://admin:admin@mongo:27017';




app.get('/', (req, res) => {
  res.send('TEST APIIII')
});

app.get('/getDB', (req, res) => {
    MongoClient.connect("mongodb://root:password@mongodb:27017")
    .then(()=>{
      console.log("db connect success");
    })
    .catch((err)=>{
      throw err
    });
    res.send('TEST APIIII db connect success')
});

app.listen(port, () => {
  console.log(`Application API exemple à l'écoute sur le port ${port}!`)
});