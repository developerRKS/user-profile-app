const express = require("express");
const users = require("./data/users")
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("API is running....")
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find((u) => u._id === req.params.id);
    res.send(user)
})

app.listen(PORT, console.log(`Running on port ${PORT}`))