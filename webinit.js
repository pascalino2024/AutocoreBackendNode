const express = require("express");
const path = require("path");
// express router need to be declared
const router = express.Router();
const ProductController =  require('../controllers/products')
const rootDir = require('../util/path') ;
router.get("/",ProductController.getAddProduct);
router.use("admin/index",ProductController.getAddProduct);

const Product = require('../models/product') ;
const User = require('../models/user') ;





// Cette api permet d'afficher les produits sur la page principal
 router.use('/api/index/:type',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const type = req.params.type; 
  console.log(type);
  Product.fetchbytype(type)
  .then(([rows,fieldData]) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(rows) ;
  })
  .catch(err => {console.log(err)}) ;
}) 

 router.use('/api/category/:category',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const category = req.params.category; 
  console.log(category);
  Product.fetchbycategories(category)
  .then(([rows,fieldData]) => {
    //console.log(rows);
    res.status(200).json(rows) ;
  })
  .catch(err => {console.log(err)}) ;
}) 

router.use('/api/search/:search',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const search = req.params.search; 
  console.log(search);
  Product.fetchbytags(search)
  .then(([rows,fieldData]) => {
   // console.log(rows) ;
    res.status(200).json(rows) ;
  })
  .catch(err => {console.log(err)}) ;

})

router.use('/api/slug/:slug',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const proslug = req.params.slug ; 
  console.log(proslug);
   Product.findByslug(proslug)
   .then(([rows,fieldData]) => {
   // console.log(rows);
    res.status(200).json(rows) ;
  })
  .catch(err => {console.log(err)}) ;


})

router.use('/api/login/:email',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const email = req.params.email; 
  console.log(email);
   User.findBylogin(email)
   .then(([rows,fieldData]) => {
   // console.log(rows);
    res.status(200).json(rows[0 ]) ;
  })
  .catch(err => {console.log(err)}) ;


})


module.exports = router;




