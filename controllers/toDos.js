var ToDo = require('../modles/toDoModule')


module.exports = function(app){

    app.get('/apiSetup', function(req, res){


        var toDosStr = [
            {
                username: 'ahmed',
                toDo: 'read a fiction book',
                isDone: false,
                hasAttachement: false
            }

        ]

        ToDo.create (toDosStr, function(err, results){
            res.send(results);
        });

    
    });
    
    app.get('/form', function(req, res){
        res.render ('form');
    })





}