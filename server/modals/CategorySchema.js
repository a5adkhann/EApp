const { Schema, default: mongoose } = require("mongoose");

const CategorySchema = new Schema({
    CategoryImg: String,
    CategoryTitle: String,
    categorySeason: String,
})

const categoryModal = mongoose.model("categorie", CategorySchema);

module.exports = categoryModal;