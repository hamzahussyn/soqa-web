const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views',  '/index.html'))
});

app.get('/playground', function(req, res){
  res.sendFile(path.join(__dirname + '/views',  '/chat.html'))
})

app.listen(process.env.PORT, () => {console.log('Server is up.')});
