const express = require('express');
const mongoose = require('mongoose');
var cors = require("cors");

// mongoDB url
const mongoString = "mongodb://localhost:27017/prem";

// router files
const locationRouter = require('./routes/location');
const restaurentRouter = require('./routes/restaurents');
const mealtypeRouter = require('./routes/mealtypes');
const userRouter = require('./routes/user');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/location', locationRouter)
app.use('/api/restaurent', restaurentRouter)
app.use('/api/mealtype', mealtypeRouter)
app.use('/api/user', userRouter)


app.use((req, res, next) => {
  res.status(404).send({ "status": 404, "message": "API URL Not Found", "error": true });
});

app.listen(3002, () => {
  console.log(`Server Started at ${3002}`)
})