require('dotenv').config({path: __dirname + '/.env'})

const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 4000;
const server = http.createServer(app);

// Connecting to Datatbase
const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.in8g9nu.mongodb.net/?retryWrites=true&w=majority`
// mongoose.connect(connectionString).then(()=> {
//     console.log('Succesfully connected to database');
//     // Start listening after connected to database
//     server.listen(port);
// }).catch((err) => {
//     console.log('An Error Occured Connecting to Database', err);
// })

server.listen(port)
