const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('TEST APIIII')
});

app.listen(port, () => {
  console.log(`Application API exemple à l'écoute sur le port ${port}!`)
});