const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
  res.send('Hello, Go to /app1 or /app2 to view react apps');
});

app.use(express.static(path.join(__dirname, 'app1/build')));

app.use(express.static(path.join(__dirname, 'app2/build')));

app.get('/getData', function(req, res) {
  res.status(200).send('42');   
});

app.get('/app1', (req,res) =>{
  res.sendFile(path.join(__dirname+'/app1/build/index.html'));
});

app.get('/app2', (req,res) =>{
  res.sendFile(path.join(__dirname+'/app2/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));