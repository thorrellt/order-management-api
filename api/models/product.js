const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
},
{ versionKey: false });

module.exports = mongoose.model('Product', productSchema);