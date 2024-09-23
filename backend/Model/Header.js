const mongoose = require("mongoose");

const { Schema } = mongoose;

const Header = new Schema({
  heading: {name: String, content:[]},
});

const Headers = mongoose.model("Header", Header);

module.exports = Headers;
