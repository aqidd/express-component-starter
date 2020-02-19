const express = require('app').getExpress()
const Timestamp = require('mongodb').Timestamp

// todo: make controller thinner, move to repo and service layer
class TodoController {
    async getList(req, res, next) {

        try {
            let data = await express.db.collection('todos').find().toArray()
            return res.json(data)
        } catch (error) {
            console.log(error)
                // todo use proper error code
            return res.status(500).json({
                message: `Error Occured : ${error.message || error}`
            })
        }
    }

    async createTodo(req, res, next) {
        let data = req.body
        data.timestamp = Timestamp()
        try {
            express.db.collection('todos').insertOne(data)
            return res.json({
                message: `Successfully insert data`
            })
        } catch (error) {
            console.log(error)
                // todo use proper error code
            return res.status(500).json({
                message: `Error Occured : ${error.message || error}`
            })
        }

    }
}

module.exports = new TodoController()