const mongoose = require('mongoose');
const {Schema} = mongoose;


const productSchema = new Schema({
    title: {type:String, required:true, unique:true},
    description: {type:String},
    price: {type: Number, min :[0, 'Wrong Price'], required:true},
    discountPercentage: {type: Number, max: [50, "Wrong Discount"]},
    rating: {type: Number, min :[0, 'Wrong Rating'], max:[5,' Wrong Max Rating'], default:0},
    brand: String,
    category: String,
    thumbnail: {type:String, required:true},
    images: [ String ]   // Array of images having string URL
});

exports.Product = mongoose.model('Product', productSchema);
