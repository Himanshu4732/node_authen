const mongoose = require('mongoose');
const uri = "mongodb+srv://himanshukumar9507638964:Himanshu@123@cluster0.tn9qeuo.mongodb.net/?appName=Cluster0";

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

module.exports = mongoose.model('user', userSchema);