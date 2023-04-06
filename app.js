const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();


// const utils = require("./utils");
// const middlewares = require("./middlewares");
// const router = require("./routes");

// ---------------------env vars---------------------
require('dotenv').config({ path: './.env' });

// ---------------------middleware-------------------
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(mongoSanitize());

var corsOptions = {
  origin: '*',
}

app.all('*', cors(corsOptions), (req, res, next) => {
  console.log(`asked for me`)
  res.send('chal raha h');
});

module.exports = app;
