const { Category } = require("../Model/Category");

const addCategory = (req, res) => {
  Category.find({ categoryName: req.body.categoryName }).then((result) => {
    if (result.length === 0) {
      let category = new Category({
        categoryName: req.body.categoryName,
      });
      category.save();
      res.send("Category added successfully");
    }
  });
};

const getCategory = (req, res) => {
  Category.find().then((result) => {
    res.send(result);
  });
};

module.exports = { addCategory, getCategory};
