const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = Schema({
  categoryName: String,
});

const subCategorySchema = Schema({
  subCategoryName: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Category = mongoose.model("Category", categorySchema);
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = { Category, SubCategory };
