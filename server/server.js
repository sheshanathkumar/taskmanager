const express = require('express');
const router = require("./src/employee/router")
var cors = require('cors')

const app = express();

const port = 3000;

app.listen( port, () => {
    console.log("Listening to port ", port);
} )

app.use(express.json());
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }
app.use('/v1', router);

// app.get("/", (req, res) => {
//     res.send("Hello From Node")
// })