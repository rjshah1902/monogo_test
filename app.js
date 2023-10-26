const express = require('express');
const app = express();
const all_pages = require('./app/routes/index');
const db = require("./app/models/db");
const error = require('./app/middelware/error');
const morgan = require('morgan');

app.use(morgan('dev'));


const connectDB = async () => {
    try {
        const connection = db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // .then(() => {
        //     console.log("Connected to the database!");
        // }).catch(err => {
        //     console.log("Cannot connect to the database!", err);
        //     process.exit();
        // });
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
};

connectDB();

app.use(express.json());

app.use('/api', all_pages);

app.get('/', (req, res) => {

    res.status(200).send({
        message: "Welcome to the MongoDB",
        status: true,
        data: []
    });
});

app.use(error);

module.exports = app;