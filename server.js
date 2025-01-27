const express = require('express');
const app = express();
const PORT = 3000;





app.get('/', (req, res) => {
  res.send('Hello World');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.post('/user', (req, res) => {
  res.send('Got a POST request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});


app.listen(3000, () => {
  console.log('Server is running');
});