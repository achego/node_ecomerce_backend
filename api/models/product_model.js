const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String},
    price: { type: Number, required: true},
})

module.exports = mongoose.model('Product', productSchema)