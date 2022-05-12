const express = require('express');
const app = express();
const{mongoose} = require('./db/mongoose');
const { List, Task} = require('./db/schemas');
const bodyParser = require('body-parser');
const {User} = require("./db/schemas/user.model");
app.use(bodyParser.json());


var user;


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

    let title = req.body.row.task;
    let imp = req.body.row.importance;
    let time = req.body.row.timeNeeded;
    let del = req.body.row.delegate;
    let comp = req.body.row.complete;
    let ctime = req.body.row.completionTime;
    let date = req.body.row.date;
    console.log(typeof del);
    console.log(user);

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
    user = email;

    User.findByCredentials(email, password).then((user) => {
        console.log(user);
        res.send(user);
    }).catch((e) => {
            res.status(400).send(e);
        });
    })


    app.listen(3000, () => {
        console.log("listening");
    })




app.post('/users', (req, res) => {
    // User sign up

    let body = req.body;
    let newUser = new User(body);
    console.log(newUser);


    newUser.save().then((user)=>
    {
        res.sendStatus(200);
    }).catch((e) => {
        res.status(400).send(e);
    })
})






