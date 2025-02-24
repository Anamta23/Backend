import express from 'express';
const app = express();

app.get('/',(req,res) => {
  res.send("hello aryan");
});

app.get('/api/:name/:age',(req,res) => {
  try{
    const data = req.params 
    res.send(`Hello my name is ${data.name} and your age is ${data.age}`);
  } catch(error){
    console.log(error.message);
  }
  });

app.get('/api',(req,res) => {
  try{
    const {name,rollno} = req.query;
    if(!name){
        res.send({
            status: 404, message: " Name is required"
        });
        res.status(404).send("Name is must")
    }
    else{  
        res.send(`Hello Dear ${name} and my roll no. is ${rollno}`);
    }
    
}catch (error){
    console.log(error);
}
});

    const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});