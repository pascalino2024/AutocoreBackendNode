const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    submodel:String,
    id: Number,
    year: Number,
    make: String,
    model: String,
    fueltype:String,
    transmission:String ,
    engine: String
 

});

module.exports = mongoose.model('Vehicle',userSchema )