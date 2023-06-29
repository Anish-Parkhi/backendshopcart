const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    name:{
        type: String,
    },
    roll:{
        type: String,
        required: true
    },
    present:{
        type: Boolean,
        default: true
    }
})

const Student = mongoose.model('student',StudentsSchema);
module.exports = Student;