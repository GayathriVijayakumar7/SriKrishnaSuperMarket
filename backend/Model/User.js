const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String,
  mobileNumber: Number,
  emailAddress: String,
  age: Number,
  address: String,
  aadharNumber: Number,
  passWord: String,
  gender: String,
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
