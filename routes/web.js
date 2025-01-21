const express = require("express");
const path = require("path");
const axios = require("axios");
// express router need to be declared
const router = express.Router();
const ProductController =  require('../controllers/products')
const rootDir = require('../util/path') ;
//router.get("/",ProductController.getAddProduct);
//router.use("admin/index",ProductController.getAddProduct);

const Product = require('../models/product') ;
const User = require('../models/user') ;
const Orders = require('../models/orders') ;





// Cette api permet d'afficher les produits sur la page principal
 router.use('/api/emplacement/:type',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const type = req.params.type; 
  console.log(type);
  Product.find({emplacement: type})
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;
}) 

 router.use('/api/category/:category',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const category = req.params.category; 
  console.log(category);
  Product.find({categories: category})
  .then((products) => {
    //console.log(rows);
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;
}) 

router.use('/api/search/:search',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const search = req.params.search; 
  console.log(search);
  Product.find() 
  //Product.fetchbytags(search)
  .then((products) => {
   // console.log(rows) ;
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;

})

router.use('/api/slug/:slug',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const proslug = req.params.slug ; 
  console.log(proslug);
  Product.findOne({slug:proslug})
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;


})

router.get('/api/Orders',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const proslug = req.params.slug ; 
  console.log(proslug);
  Orders.find()
  .then((orders) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(orders) ;
  })
  .catch(err => {console.log(err)}) ;


})

router.get('/',(req , res , next ) => {
  
  res.write("<h1>Welcome to Autocore Togo</h1>")
})

router.use('/api/Order/:orderId',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const orderId = req.params.orderId ; 
  console.log(orderId);
  Orders.findOne({id:orderId})
  .then((orders) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(orders) ;
  })
  .catch(err => {console.log(err)}) ;


})

router.use('/api/vehicle/:id',(req , res , next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;
  const proid = req.params.id ; 
  console.log(proid);
  Product.findByid()
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;


})

router.use('/api/login/:email/password/:password',(req , res , next ) => {

  const email = req.params.email;
  const password = req.params.password; 
  console.log(email,password);
   User.findOne({email:email})
   .then((user) => {
   res.status(200).json(user) ;
  })
  .catch(err => {console.log(err)}) ;
 
})


router.post('/api/registration/',(req , res , next ) => {
  
   const Lastname = req.body.lastName ;
  const firstName = req.body.firstName ; 
  const email = req.body.email ;
  const password = req.body.password ;
  const pays   =   req.body.pays ;
  const Addresse  = req.body.addresse ; 
  const Avatar = req.body.avatar ;
  const telephone = req.body.telephone ; 


  const user =  new User ({
    email: email ,
    phone: telephone,
    firstName: firstName,
    lastName: Lastname,
    Pays:pays ,
    password:password,
    Addresse:Addresse,
    Garage:[],
    avatar: Avatar,
    Cart:[],
  
   })


   user.save() 
   .then(result => {
     console.log('Success I new user has been registered');
     return res.status(400).json({message:"Success I new user has been registered"});
     
   })
   .catch(err =>{
        console.log(err);
   });
 
  
  
})


router.post('/api/orders/',(req , res , next ) => {
  
 

/*  const status = req.body.status ;
 const subtotal = req.body.subtotal;
  const createdAt = req.body.createdAt; */
  const items = req.body.items ;
  const userId = req.body.userId;
  /* const token = req.body.token;
  const number = req.body.number;
  const payment = req.body.payment;
  const quantity = req.body.quantity ;
  const totals = req.body.totals;
  const total = req.body.total; */
  const billingAddress = req.body.billingAddress;
  const shippingAddress = req.body.shippingAddress;
  const quantity = req.body.quantity ;
  //const userId = req.body.userId;

 

  const order =  new Orders ({
  
  
  userId,
  items,
  quantity,
  shippingAddress,
  billingAddress,

 })
 order.save() 
 .then(result => {
   console.log('Sucess');
   
 })
 .catch(err =>{
      console.log(err);
 });
 
 
})

router.use('/api/products',(req , res , next ) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;

  Product.find()
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;

}) 


router.use('/api/mobile/products',(req , res , next ) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;

  Product.find({}).select('name ,reviews, Categories, price , compareAtPrice , rating , reviews , images , partNumber')
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;

})

router.use('/api/mobile/:search',(req , res , next ) => {
  const search = req.params.search;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') ;

  Product.find({emplacement: search}).select('name ,reviews, Categories, price , compareAtPrice , rating , reviews , images , partNumber')
  .then((products) => {
    //rows[0].push({badges:['new']})
    res.status(200).json(products) ;
  })
  .catch(err => {console.log(err)}) ;

})


router.get('/decode-vin/:vin', async (req, res) => {
  const vin = req.params.vin;

  // Basic validation for VIN
  if (!vin || vin.length !== 17) {
      return res.status(400).json({ error: 'Invalid VIN. Please provide a 17-character VIN.' });
  }

  try {
      // Call the NHTSA VIN Decoder API
      const apiUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`;
      const response = await axios.get(apiUrl);

      const results = response.data.Results;

      // Extract relevant fields from the response
      const year = results.find(item => item.Variable === 'Model Year')?.Value;
      const brand = results.find(item => item.Variable === 'Make')?.Value;
      const model = results.find(item => item.Variable === 'Model')?.Value;
      const submodel = results.find(item => item.Variable === 'Trim')?.Value; // Optional
      const engine = results.find(item => item.Variable.includes('Engine'))?.Value; // Look for Engine-related field

      // Send the response
      res.json({
          vin,
          year: year || 'Unknown',
          brand: brand || 'Unknown',
          model: model || 'Unknown',
          submodel: submodel || 'Unknown',
          engine: engine || 'Unknown'
      });
  } catch (error) {
      console.error('Error decoding VIN:', error.message);
      res.status(500).json({ error: 'Failed to decode VIN. Please try again later.' });
  }
});


module.exports = router;




