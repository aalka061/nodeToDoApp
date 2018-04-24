var mongoose = require('mongoose')


var Schema = mongoose.Schema;

var toDoSchema = new Schema ({

    username: String,
    toDo: String,
    isDone: Boolean,
    hasAttachement: Boolean
})

var ToDo = mongoose.model('ToDo',toDoSchema);



module.exports = ToDo;