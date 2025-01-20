const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const garageSchema = new Schema({

    id: Number,
    id_user:Object,
    token: String,
    vehicle:Array,
    



});

module.exports = mongoose.model('Garages',garageSchema )