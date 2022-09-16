const express = require('express')
const path = require('path');
const app = express()
const port = 3000
var lineReader = require('line-reader');

app.get('/get_data', (req, res, next) => {
  var options = {
        root: path.join(__dirname)
    };
  var fileName = 'data.txt';
  res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            next();
        }
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

