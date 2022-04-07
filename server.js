const express = require('express');

const app = express();

const middleware1=(req,res,next)=>{
  console.log("he, I am M1");
  next() //block the flow and take it back to requested route
}
const middleware2=(req,res,next)=>{
  console.log("but, I am M2");
  next()
}

app.use(middleware1);
app.use(middleware2);

app.get('/', (req, res) => {
  res.send('Successful response.');
})
app.get('/user',middleware2, (req, res) => {
  res.send('Successful user i kya.');
})

app.listen(3001)
;