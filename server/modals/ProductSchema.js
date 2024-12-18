const { Schema, model, default: mongoose } = require("mongoose");

const productSchema = new Schema({
        productImg: String,
        productName: String,
        productPrice: String
})

const productModal = mongoose.model("product",productSchema);

module.exports = productModal;