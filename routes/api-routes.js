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
    });

    app
    .post("/api/task", function(req, res){
        console.log(req.body)

        db
        .Task
        .create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(dbTodo){
            res.json(dbTodo)
        });
    });

    app
    .delete("/api/task/:id", function(req,res){
        db
        .Task
        .destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo){
            res.json(dbTodo)
        });
    });
    app
.put("/api/task", function(req, res){
    db
    .Task
    .update({
        text: req.body.text,
        complete: req.body.complete
    },{
        where: {
            id: req.body.id
        }
    }).then(function(dbTodo){
        res.json(dbTodo);
    });
});

};

