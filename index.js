const express = require('express');
let app=express();
const nodemon = require('nodemon');
const ejs = require('ejs');
const bodyparser =require('body-parser');
const mongoose=require('mongoose');
const port = 4321;
//const {mymodel}=require('./models/mymodel');

app.use(express.static('public'));
app.set('view engine','ejs');


 

app.get('/',(req,res)=>{

res.render('product',{data:{name:"Desk",price:300}})
});










app.listen(port,()=>{
    console.log('yes');
})