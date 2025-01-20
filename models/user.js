const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  Pays:String,
  password:String,
  Addresse:Array,
  Garage:Array,
  avatar: String,
  Cart:Array,
  verificationToken:String,
  verified:{
    type:Boolean,
    default:false,
  },
 

});

module.exports = mongoose.model('User',userSchema )