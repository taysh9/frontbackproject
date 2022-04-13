const express = require('express');
const app = express();

const { List, Task} = require('./db/models');

app.get('lists', (req,res) =>{
    //get tasks
    List.find({}).then((lists)=>{
        res.send(lists);
    });
})



app.post('lists', (req,res) =>{
   ///return tasks
});

app.patch('lists/:id',((req, res) =>{
    //update tasks
} ))


app.delete('lists/:id',(req, res) => {
    //delete tasks
});


app.listen(3000,() =>{
    console.log("listening");
})





