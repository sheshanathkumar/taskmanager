const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const env = require("dotenv").config();
const category = require('./task/models/Category')
const tasks = require('./task/models/Task')
const status = require('./task/models/Status')
const app = express();



const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE;

app.use(express.json())

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

mongoose.pluralize(null)
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Mongoose Connected")
    })
    .catch((err) => console.log("Monog Error ", err))


app.listen(PORT, () => {
    console.log("Running on port ", PORT);
})


app.get("/v1/status/all", (req, res) => {

    status.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/v1/task/all", (req, res) => {
    tasks.find()
        .then( (result) => {
            res.status(200).json(result);
        } )
        .catch( (err)  => {
            res.status(400).json( {"stauts":"FAILED", "code": 400, "message": err } )
        })
})


app.get("/v1/task/category", (req, res) => {

    category.find()
        .then( (result) => {
            res.status(200).json(result);
        } )
        .catch( (err)  => {
            res.status(400).json( {"stauts":"FAILED", "code": 400, "message": err } )
        })
})


app.get("/v1/status/:id", (req, res) => {

    const taskid = req.params.id;
    console.log(taskid);
    
    status.find( {"taskid" : taskid} )
        .then( (result) => {
            res.status(200).json(result);
        } )
        .catch( (err)  => {
            res.status(400).json( {"stauts":"FAILED", "code": 400, "message": err } )
        })
}  ) 
