const express = require('express');
const app = express();
const{mongoose} = require('./db/mongoose');
const { List, Task} = require('./db/schemas');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/lists', (req,res) =>{
    //get tasks
    List.find({}).then((lists)=>{
        res.send(lists);
    });
})



app.post('/lists', (req,res) =>{

    let title = req.body.title;

    let nList = new List({title});

    nList.save().then((listDoc) => {
        res.send(listDoc);

    })
   ///return tasks
});

app.patch('/lists/:id',((req, res) =>{
    //update tasks
} ))


app.delete('/lists/:id',(req, res) => {
    //delete tasks
});


app.listen(3000,() =>{
    console.log("listening");
})





