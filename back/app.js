const express = require('express');
const app = express();
const{mongoose} = require('./db/mongoose');
const { List, Task} = require('./db/schemas');
const bodyParser = require('body-parser');
const {User} = require("./db/schemas/user.model");
app.use(bodyParser.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    next();
});
app.get('/lists', (req,res) =>{
    //get tasks
    List.find({}).then((lists)=>{
        res.send(lists);
    });
})



app.post('/task', (req,res) =>{

    let title = req.body.row;
    console.log(title);

    //let nList = new List({title});

    //nList.save().then((listDoc) => {
        //res.send(listDoc);

    //})
   ///return tasks
});

app.patch('/lists/:id',((req, res) =>{
    //update tasks
} ))


app.delete('/lists/:id',(req, res) => {
    //delete tasks
});


/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {

        }).catch((e) => {
            res.status(400).send(e);
        });
    })


    app.listen(3000, () => {
        console.log("listening");
    })
})





