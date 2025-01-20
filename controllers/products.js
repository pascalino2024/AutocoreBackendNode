
const Product = require('../models/product') ;

exports.setAddProduct = (req, res, next) => {
        // req.body permet de recuperer dans une forme primitive une donne inserer 
        const name = req.body.name ;
        const sku = req.body.sku ; 
        const brand = req.body.brand ;
        /* const reviews = req.body.review ; */
        const image1 = req.body.image1 ; 
        const image2 = req.body.image2 ;
        const image3 = req.body.image3 ;
        const price = req.body.price ;
        const color = req.body.color ;  
        const grandecategories = req.body.grandecategory ; 
        const categories = req.body.categories ; 

        /* const product =  new Product (name ,sku , brand , image1 ,image2,image3 ,price,color,categories,grandecategories); */
        const product =  new Product ({
           name : name,
           slug : name.trim(),
           sku : sku,
           badges : ['new'],
           reviews : 3 ,
           availability : 'available',
           brand :{slug:brand , name:brand, image:"" ,country:''},
           compareAtPrice : (+price) + 2500,
           images : [image1,image2,image3],
           price : +price,
           attributes : { color: color },
           rating : 3,
           categories :categories,
           emplacement : grandecategories,
           excerpt : "Bonne Qualitee et Original",
           attributes :[{
            "name": "test",
            "slug":name.toLowerCase() ,
            "featured": "true",
            "values": []
          }],
           description :"This is the Description Section",
           partNumber : sku ,
           stock : "in-stock",
           compatibility : [1],
           tags : [name,sku,brand,color,categories,grandecategories],
           type : {
            "slug": "default",
            "name": "Default",
            "attributeGroups": [
              {
                "name": "General",
                "slug": "general",
                "attributes": [
                  "speed",
                  "power-source",
                  "battery-cell-type",
                  "voltage",
                  "battery-capacity",
                  "material",
                  "engine-type"
                ]
              },
              {
                "name": "Dimensions",
                "slug": "dimensions",
                "attributes": [
                  "length",
                  "width",
                  "height"
                ]
              }
            ]
          },
           options : [
            {
              "type": "default",
              "slug": "material",
              "name": "Material",
              "values": [
                {
                  "slug": "steel",
                  "name": "Steel"
                },
                {
                  "slug": "aluminium",
                  "name": "Aluminium"
                },
                {
                  "slug": "thorium",
                  "name": "Thorium"
                }
              ]
            },
            {
              "type": "color",
              "slug": "color",
              "name": "Color",
              "values": [
                {
                  "slug": "white",
                  "name": "White",
                  "color": "#fff"
                },
                {
                  "slug": "yellow",
                  "name": "Yellow",
                  "color": "#ffd333"
                }
              ]
            }
          ],
           customFields : []
});
        product
        .save() 
        .then(result => {
          console.log('Sucess');
          res.redirect('/admin/index')
        })
        .catch(err =>{
             console.log(err);
        });
        
       
       
}

  exports.getAddProduct = (req , res , next ) => {
        // this is a callback function 
       Product.fetchAll(products => {
                res.render('shop/index', {
                  prods: products,
                  pageTitle: 'Index',
                  path: '/',
                  hasProducts: products.length > 0,
                  activeShop: true,
                  productCSS: true
                });
              }); 
} 