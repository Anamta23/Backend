import express from 'express';
const app = express();

app.get('/',(req,res) => {
res.send("hello aryan");
});

app.get('/api',(req,res) => {
    const data = req.query;
    res.send(`Hello Dear ${data.name} and my roll no. is ${data.rollno}`);
    });
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});