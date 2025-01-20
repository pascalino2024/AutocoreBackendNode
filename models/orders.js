const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    /* id: Number,
    token: String, */
    userId:String,
    /* number: String,
    createdAt: String,
    payment: String,
    status: String, */
    items: Array,
    quantity: Number,
    /* subtotal: Number,
    totals: Array,
    total: Number, */
    shippingAddress: Array,
    billingAddress: Array,
    createdAt:{
        type:Date,
        default:Date.now
    }


});

module.exports = mongoose.model('Orders',orderSchema )