const express = require("express")

const server = express()

server.use(express.json())

const Users = require("./users/model")

server.get("/api/users", (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: err })
        }
        )
})

module.exports = server