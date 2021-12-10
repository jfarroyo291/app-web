const msg = require('mongoose');
msg.connect("mongodb://192.168.100.5:27017/Juan", (err, db) => {
    if (err) throw err;
    console.log("Success!! Database conected!")
});

module.exports = msg;