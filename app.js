const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminroutes = require("./routes/admin");
const webroutes = require("./routes/web");
const path = require('path') ; 
const rootDir = require('./util/path') ;
 const db = require('./util/database') ;
const session = require('express-session');
const mongoose = require('mongoose');
const crypto = require('crypto') ; 
const nodemailer = require("nodemailer")
// express static permet de donner la permission sur le dossier public et ses sous-dossier
app.use(express.static(path.join(__dirname,'public'))) ;

const jwt = require("jsonwebtoken");

//const mongoConnect = require('./util/database').mongoConnect  ; 

// this is to set the Template engines defined
app.set('view engine' ,'ejs') ; 
app.set('views','views') ;
app.use(bodyParser.json());




app.use((req,res,next) =>{

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  next();
})
app.use(webroutes);

/* db.execute('SELECT * FROM products')
.then((result) => {
  console.log(result)
})
.catch(err => {}) ;
 */
app.use((req, res, next) => {
  // in this context we do not need to '../' because the caller is App so we go from app.js ==> views ....
  // render('404') permet de faire reference a 404.ejs
 // res.status(404).render('404',{pageTitle:'Page Not Found'}) ;
 next();
});

app.use("/admin", adminroutes); 



mongoose.connect('mongodb+srv://richardgobe2:478hYL8TFLVqkSiz@cluster0.oookz.mongodb.net/autocore?retryWrites=true&w=majority&appName=Cluster0')
.then(result => {
    app.listen(4000);
}).catch(err => {
  console.log(err)
}) 

