const express = require("express");
// express router need to be declared
const router = express.Router();
const bodyParser = require("body-parser");
const path = require('path') ; 
const rootDir = require('../util/path') ;

// it is
router.use(bodyParser.urlencoded({ extended: false }));


const ProductController =  require('../controllers/products')


router.get("/add-product", (req, res, next) => {
  console.log("Add product");
  
  res.render('admin/add-product',{}) ; 
});

router.get("/view-products", (req, res, next) => {
  console.log("Add product");
  
  res.render('admin/add-product',{}) ; 
});

router.use('/index', (req, res, next) => {
  console.log("Admin Index");
  
  res.render('admin/index',{}) ; 
} ) ;

router.post("/add-product", ProductController.setAddProduct ); 

module.exports = router;
