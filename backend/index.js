const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('xNote backend is up and running!');
});
module.exports = serverless(app);

