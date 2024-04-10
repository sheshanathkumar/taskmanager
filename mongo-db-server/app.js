const express = require("express");
const app = express();
const env = require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json())
app.listen( PORT, () => {
    console.log("Running on port ", PORT);
} )

app.use("/", (req, res) => {
    res.send("Hello from server");
})