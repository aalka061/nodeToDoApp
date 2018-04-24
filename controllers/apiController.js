var ToDos = require('../modles/toDoModule')

var body_parser = require('body-parser');

module.exports = function(app){

    app.use(body_parser.json());

    app.use(body_parser.urlencoded({extended: true}));

    app.get('/api/todos/:uname', function(req, res){

        ToDos.find({username: req.params.uname}, function(err, results){
            if (err) throw err;

            res.send(results)
        })

    })



    app.get('/api/todos/:id', function(req, res){

        ToDos.find({ _id: req.params.uname}, function(err, todo){
            if (err) throw err;

            res.send(todo);
        })

    })

    
    app.post('/api/todo', function(req, res){

        if (req.body.id){
            ToDos.findByIdAndUpdate(req.body.id, {
                toDo: req.body.toDo, isDone: req.body.isDone, 
                hasAttachement: req.body.hasAttachement
            }, function(err){
                if (err) throw err;
                res.send("success user has been updated"); 
            });
        }
        else {
            var newTodo = ToDos ({
                username: "test",
                toDo: req.body.toDo,
                isDone: req.body.isDone,
                hasAttachement: req.body.hasAttachement

            });

            newTodo.save(function(err, res){
                res.send('success')
            });

        }
    });

    app.delete ('/api/todo', function(req, res){

        ToDos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            res.send("document has been deleted")
        })


    })



}
