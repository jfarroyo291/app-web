const dotenv = require('dotenv');

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
    origin: '*'
}))
const userRoutes = require("./users");

app.use("/api/teachers", userRoutes);
app.use("/api/tutors", userRoutes);
app.use("/api/students", userRoutes);

app.get("/api", (req, resp) => {
    resp.json({
        "message": "pong"
    })
})

app.get("/", (req, resp) => {
    resp.json({
        "message": "pong"
    })
})

module.exports = app;