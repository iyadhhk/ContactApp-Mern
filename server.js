const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contacts = require('./routes/api/contacts');
const app = express();

// *bodyParser middleware
app.use(bodyParser.json());
// *DB config
const db = require('./config/keys').mongoURI;

//* Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connected ...'))
  .catch(err => console.log(err));

// use routes
app.use('/contacts', contacts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
