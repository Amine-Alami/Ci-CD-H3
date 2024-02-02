/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

const express = require('express');
const serverResponses = require('../utils/helpers/server.responses');
const messages = require('../config/messages');
var {Todo} = require('../models/todos/todo.model');

const routes = (app) => {
    const router = express.Router();

    router.post('/todos', (req,res)=>{
        var todo = new Todo({
            text: req.body.text
        });

        todo.save()
            .then((result)=>{
                serverResponses.sendSuccess(res,messages.SUCCESSFUL, result);
            })
            .catch((e) => {
                serverResponses.sendError(res,messages.BAD_REQUEST,e)
            })
    });

    router.get('/', (req,res) => {
        Todo.find({}, {__v:0})
            .then((todos)=>{
                serverResponses.sendSuccess(res,messages.SUCCESSFUL, todos);

            })
            .catch((e) => {
                serverResponses.sendError(res,messages.BAD_REQUEST,e)
            })
    });

    //it's a prefix before api it is useful when you have many modules and you want to
    //differentiate b/w each module you can use this technique
    app.use('/api', router);
};
module.exports = routes;