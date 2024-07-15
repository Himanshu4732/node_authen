const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.get('/', function (req, res) {
    res.render('index');
});
app.post('/create', function (req, res) {
    let {username,email,password,age} = req.body;

bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt ,async function (err,hash){
        let createdUser = await userModel.create({
            username,
            email,
            password:hash,
            age
        })

        let token = jwt.sign({email},"asdklkl")
        res.cookie('token', token)

        res.send(createdUser);
    })
})
   
});

app.listen(3000)