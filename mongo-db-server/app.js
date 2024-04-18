const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const env = require("dotenv").config();

const category = require('./task/models/Category')
const tasks = require('./task/models/Task')
const statusObj = require('./task/models/Status')
const users = require('./task/models/Users')
const taskCounter = require('./task/models/TaskCounter')
const statusCounter = require('./task/models/StatusCounter');
const Task = require("./task/models/Task");

const app = express();



const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE;
const TASK_COUNTER_ID = process.env.TASK_COUNTER_ID;
const STATUS_COUNTER_ID = process.env.STATUS_COUNTER_ID;

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
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err })
        })
})


app.get("/v1/task/category", (req, res) => {

    category.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err })
        })
})


app.get("/v1/status/:id", (req, res) => {

    const taskid = req.params.id;
    console.log(taskid);

    status.find({ "taskid": taskid })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err })
        })
})


app.get("/v1/user/all", (req, res) => {

    users.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err })
        })

})


app.post('/v1/task/new', (req, res) => {

    var counter = 0;

    var newTask = new Task();
    newTask.title = eq.body.title;
    newTask.subject = req.body.descr;
    newTask.author = req.body.author;
    newTask.category = "new";
    newTask.priority = req.body.priority;
    newTask.time = Date.now().toString();

    taskCounter.findOne()
        .then((result) => {
            counter = result.counter;
            console.log(counter);
            counter = counter + 1;

            taskCounter.findByIdAndUpdate(
                { "_id": "661d7b02de99c7d7471b1596" },
                { "counter": counter }
            ).then((result) => {
                console.log("current counter ", counter);
            })

            newTask.id = counter;
            newTask.save();
            res.status(200).json({ "stauts": "SUCCESS", "code": 200, "message": "Task Addedd" })
        })
        .catch((err) => res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err }))


})


app.post('/v1/status/add', (req, res) => {

    var counter = 0;
    console.log(req.body)
    statusCounter.findOne()
        .then((result) => {
            counter = parseInt(result.counter + 1);
            console.log(counter);

            statusCounter.findByIdAndUpdate(
                { "_id": "661d7ef9de99c7d7471b1599" },
                { "counter": counter }
            );

            const newStatus = {
                id: counter,
                title: req.body.status,
                time: Date.now().toString()
            }
            var taskId = req.body.taskId;
            console.log("taskid = ", taskId);

            statusObj.updateOne(
                { "taskid": taskId },
                {
                    $push: {
                        "status": newStatus
                    }
                }
            ).then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                res.status(400).json({ "stauts": "FAILED", "code": 400, "message": "Error" })
            })
        })
        .catch((err) => res.status(400).json({ "stauts": "FAILED", "code": 400, "message": "Error" }))

})

app.post('/v1/task/category/update', (req, res) => {

    console.log(req.body)
    Task.findOneAndUpdate({ "id": req.body.taskId }, {"category": req.body.catId})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) =>
            res.status(400).json({ "stauts": "FAILED", "code": 400, "message": err }))

})