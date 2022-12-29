const express  = require('express');
const morgan = require('morgan');
const BaseRoutes = require('./api/routes/base_routes');
const productRouter = require('./api/routes/product_route');
const StatusCodes = require('./api/utils/status_codes');


const app = express();

// Allowing CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Configurations
app.use(morgan('dev')) // Loging formated requests
app.use(express.urlencoded({extended: true})) // Converts url encoded strings to json like format in the request
app.use(express.json()) // Converts json strings to json like format in the request
// app.use(express.raw()) // Converts raw data strings to json like format in the request

app.use((req, res, next) => {
    console.log(req.body);
    next()
})


// Routes
app.use(BaseRoutes.products, productRouter)

// Error handling for unknow routes 
app.use((req, res) => {
    res.status(StatusCodes.badRequest).json({message: 'Not Found'})
})

// // All Error handling including db errors
// app.use((req, res) => {
//     res.status(StatusCodes.badRequest).json({message: 'Failed'})
// })

module.exports = app;