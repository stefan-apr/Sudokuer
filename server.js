const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

const mongoose = require('mongoose');
const conf = require('dotenv/config');
const { resolveConfig } = require('vite');

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Schema definition
const usrSchema = mongoose.Schema({
  name: {type: String, required: true},
  pw: {type: String, required: true},
  solved: {type: Object}
});

// Compile model from schema
const User = mongoose.model('User', usrSchema)

const createUser = async (name, pw) => {
  let user = new User(
      {
          name: name, 
          pw: pw,
          solved: {
            'original': [],
            'killer': []
          }
      }
  );
  
  return user.save();
}

app.use(cors());
app.use(express.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// Validate solution (proxy to partner's microservice)
app.post('/proxy', async (req, res) => {
    axios.post('http://localhost:80/', req.body)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});

// Create a new user
app.post('/createUser', async (req, res) => {
  if(!req.body.name || !req.body.pw) {
    res.status(400).json({ Error: 'Invalid request' });
  } else {
    createUser (
        req.body.name, req.body.pw
      ).then(usr => {
        res.status(201).json(usr.name)}
      ).catch(err => {
        console.error(err);
        res.status(400).json({ Error: 'Request failed' });
      });
  }
});