const express = require('express');
const data = require('./data/data');

console.log(data)
const app = express();

app.get('/apps', (req, res) => {
  res.status(200).send({
    apps: data
  })
});

app.get('/apps/:id', (req, res) => {
  req.find()
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

module.exports = app;