const mongoose = require('mongoose');

const db = require('./db');

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    publised: Boolean,
}, { timestamps: true });

console.log("Product schema");
console.log(db.mongoose);

module.exports = mongoose.model('Products', productSchema);