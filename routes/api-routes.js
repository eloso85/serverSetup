var db = require("../models");

module.exports = app =>{
    app
    .get("/api/task", function(req, res){
        db
        .Task
        .findAll({})
        .then(function(dbTodo){
            res.json(dbTodo)
        })
    })
}