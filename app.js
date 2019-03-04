var express = require('express');

var app = express();
app.use(express.static(__dirname));

app.get('/', function(req,res){
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
