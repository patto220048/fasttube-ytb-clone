const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const route = require('./routes');
require('dotenv').config()

const port = 3000 || process.env.PORT
const app = express()

// database
const db = require('./config/bd')
db.connect()
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded());
const corsConfig = {
  origin: 'http://localhost:3001',
  credentials: true,
}

app.use(cors(corsConfig));

app.use((err, req, res, next)=> {
  const status = err.status || 500
  const message = err.message || 'something went wrong!';
  return res.status(status).json({
    success: false,
    status,
    message
  })
})


app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Credentials', true);
  // res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

route(app)
