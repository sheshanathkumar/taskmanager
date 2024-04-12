const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const category = require('./task/models/Category')
const tasks = require('./task/models/Task')
const status = require('./task/models/Status')
const app = express();


const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE;

app.use(express.json())

mongoose.pluralize(null)
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Mongoose Connected")
    })
    .catch((err) => console.log("Monog Error ", err))


app.listen(PORT, () => {
    console.log("Running on port ", PORT);
})

app.get("/", (req, res) => {

    status.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})