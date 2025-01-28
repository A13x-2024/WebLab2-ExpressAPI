require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
app.use(express.json());




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


mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`listening to ${port}`);
      });
});