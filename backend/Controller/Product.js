const {Product} = require("../Model/Product");

const addProduct = (req, res) => {
  Product.find({ productName: req.body.modelName }).then((result) => {
    if(result.length === 0){
        let product = new Product({
            productName: req.body.productName,
            price: req.body.price ,
            modelName: req.body.modelName,
            uri: req.body.uri,
            productDescription:req.body.productDescription ,
            subCategory:req.body.subCategory,
            stocks: req.body.stocks,
            specifications: req.body.specifications
        })
        product.save();
        res.send("Product added successfully.")
    }
    else{
      res.send("Product already exists.")
    }
  });
};

const getProduct = (req,res)=>{
    Product.find().then((result)=>{
        res.send(result);
    })
}

module.exports = {addProduct, getProduct};
