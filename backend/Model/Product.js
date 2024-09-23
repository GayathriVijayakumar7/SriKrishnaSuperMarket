const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = Schema({
  productName: String,
  price: Number,
  modelName: String,
  uri: String,
  productDescription: String,
  subCategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
  stocks: Number,
  specifications: [{ title: String, detailName: String, detailValue:String }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = {Product};
