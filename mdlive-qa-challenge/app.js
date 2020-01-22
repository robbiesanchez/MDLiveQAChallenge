const express = require('express');
const data = require('./data/data');

console.log(data)
const app = express();

app.get('/apps', (req, res) => {
  res.status(200).send({
    apps: data
  })
});

// app.get('/apps/:id', (req, res) => {
//   res.status(200).send({
//     apps: data
//   })
// });

// app.get('/apps/:id', function(req, res, next){

//   data.collection(req.params.collection).findOne({_id:req.params.id},  function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       res.json(result)

//   })
// })


const PORT = "https://mdliveqachallenge.herokuapp.com/"

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

module.exports = app;