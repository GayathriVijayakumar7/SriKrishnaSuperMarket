const { SubCategory } = require("../Model/Category");

const addSubCategory = (req, res) => {
  SubCategory.find({ subCategoryName: req.body.subCategoryName }).then(
    (result) => {
      if (result.length === 0) {
        let subCategory = new SubCategory({
          subCategoryName: req.body.subCategoryName,
          category: req.body.category,
        });
        subCategory.save();
        res.send("Subcategory added successfully");
      }
    }
  );
};

const getSubCategory = (req, res) =>{
    SubCategory.find().then((result)=>{
        res.send(result);
    })
}

module.exports = { addSubCategory, getSubCategory };
