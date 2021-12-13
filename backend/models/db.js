<<<<<<< HEAD
const dotenv = require('dotenv').config();

const msg = require('mongoose');
msg.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, (err, db) => {
    if (err) throw err;
    console.log("Success!! Database conected!")
});

=======
const dotenv = require('dotenv').config();

const msg = require('mongoose');
msg.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, (err, db) => {
    if (err) throw err;
    console.log("Success!! Database conected!")
});

>>>>>>> 73ec1c64de61a20f2c8896c1ffb4b60a0b19c786
module.exports = msg;