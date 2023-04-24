const express = require('express');
const bodyParser = require('body-parser'); //json methode la convert panna//

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//database configration
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //? what is this

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Add a product"});
});

// add the route class

const UserRoute = require('./app/routes/user')
//user route
app.use('/user',UserRoute)

app.listen(8000, () => {
    console.log("Server is listening on port 3000");
});



