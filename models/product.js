const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

  /* name:{ type:String,required:true},
  slug:{ type:String,required:true},
  sku:{ type:String,required:false},
  badges:{type:Array,required:true},
  reviews:{type:Number,required:true},
  availability :{ type:String,required:true},
  brand : Object,
  compareAtPrice: Number,
  images: Array ,
  price: Number ,
  attributes:Object,
  rating:Number,
  categories: { type:String,required:true},
  emplacement:{ type:String,required:true},
  excerpt: String */

id:Number, // The id of the Part
name: String, // the name of this part
excerpt: String,
description: String,
slug: String,
sku: String,
partNumber: String,
stock: Array,
price: Number, // price that we will set not the the supplier 
compareAtPrice: Number,
images: Array ,
badges: Array, // we will set manually
rating: Number, // we will set it manually
reviews: Number, // depends on the Users
availability: String, // depends on the Stock
supplier:String ,
compatibility: Array, // depends on the cars
brand: Array,
tags: Array,
type: Array,
categories: String,
attributes: Array,
options: Array,
customFields:Array

});

module.exports = mongoose.model('Product',productSchema )



/* const fs = require("fs"),
const path = require("path"),
const getDb = require("../util/database").getDb,
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
),

//  the purpose of this is to only get data from file
// this part of the code is not well understood but we will move forward
/*  const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]),
    } else {
      cb(JSON.parse(fileContent)),
    }
  }),
}, */

/* 

id: number, // The id of the Part
name: String, // the name of this part
excerpt: String,
description: String,
slug: String,
sku?: String,
partNumber: String,
stock: IProductStock,
price: number, // price that we will set not the the supplier 
compareAtPrice: number|null,
images?: String[] | String ,
badges?: String[], // we will set manually
rating?: number, // we will set it manually
reviews?: number, // depends on the Users
availability?: String, // depends on the Stock
supplier?:String 
compatibility: 'all' | 'unknown' | number[], // depends on the cars
brand?: IBrand|null,
tags?: String[],
type: IProductType,
categories?: IShopCategory[],
attributes: IProductAttribute[],
options: IProductOption[],
customFields?: ICustomFields,

*/
/*
module.exports = class Product {
  constructor(name, sku,brand,image1,image2,image3,price,color,categories,grandecategories) {
    this.name = name,
    this.slug = name.toLowerCase(),
    this.sku = sku,
    this.badges = ['new'],
    this.reviews = 3 ,
    this.availability = 'available',
    this.brand = {slug:brand , name:brand, image:"" ,country:''},
    this.compareAtPrice = (+price) + 2500,
    this.images = [image1,image2,image3],
    this.price = +price,
    this.attributes = { color: color },
    this.rating = 3,
    this.categories = categories,
    this.emplacement = grandecategories,
    this.excerpt = "Bonne Qualitee et Original",
    this.attributes =[{
      "name": "test",
      "slug":name.toLowerCase() ,
      "featured": "true",
      "values": []
    }],
    this.description ="This is the Description Section",
    this.partNumber = sku ,
    this.stock = "in-stock",
    this.compatibility = [1],
    this.tags = [name,sku,brand,color,categories,grandecategories],
    this.type = {
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
    this.options = [
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
    this.customFields = []
  }

  save() {
    const db = getDb(),
    db.collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result),
        return products,
      })
      .catch((err) => {
        console.log(err),
      }),
  }

  static fetchAll() {
    const db = getDb(),
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products =>{
        console.log(products),
        return products ,
      })
      .catch((err) => {
        console.log(err),
      }),
  }

     static fetchbytype(type) {
      const db = getDb(),
      return db.collection('products').find({emplacement: type}).toArray()
      .then(products =>{
        console.log(products),
        return products ,
      })
      .catch((err) => {
        console.log(err),
      }),
  }  

  static fetchbycategories(categories) {
    const db = getDb(),
    return db.collection('products').find({categories: categories}).toArray()
    .then(products =>{
      console.log(products),
      return products ,
    })
    .catch((err) => {
      console.log(err),
    }),
  } 




   static fetchbytags(search) {
    const db = getDb(),
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products =>{
        console.log(products),
        return products ,
      })
      .catch((err) => {
        console.log(err),
      }),
  }   
 
  static  findByslug(slug){
    const db = getDb(),
    return db.collection('products').find({slug:slug}).next().
    then(products =>{
      console.log(products),
      return products ,
    })
    .catch((err) => {
      console.log(err),
    }),
    
  } 

  static  findByid(id){
    const db = getDb(),
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products =>{
        console.log(products),
        return products ,
      })
      .catch((err) => {
        console.log(err),
      }),
    
  }
},
 */