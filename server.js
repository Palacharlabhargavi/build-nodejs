const express = require('express');

const app= express(); 

app.use(express.json);
const port=8081;// local port num

const toDoList = ["learn", "apply things", "succed"];
app.get("/todos",(req,res)=>{
// res.writeHead(200)
// res.write(toDoList)
res.status(200).send(toDoList);
});
app.post("/todos",(req,res) =>{
  let newToDoItem = req.body.name;
  toDoList.push(newToDoItem);
  res.status(201).send({message: "task added successfully"});
});
app.delete("/todos",(req,res)=>{});
  const deleteThisItem = req.body.name;
  toDoList.find((elem, index) => {
    if(elem === deleteThisItem) {
      toDoList.splice(index,i);
    }
  });
  res.status(204).send({"message": `Delected item "${req.body.name}`});
  app.listen(port, () =>{
  console.log(`NodeJs Server Started Running on Port: ${port}`);
  });