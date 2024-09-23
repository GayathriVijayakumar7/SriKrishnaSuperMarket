const jwt = require("jsonwebtoken");
const fs = require("fs");

const Users = require("../Model/User");

const addUser = async (req, res) => {
  try {
    let result = await Users.find({
      aadharNumber: req.body.aadharNumber,
      passWord: req.body.passWord,
    });

    if (result.length === 0) {
      let User = await new Users({
        userName: req.body.userName,
        mobileNumber: req.body.mobileNumber,
        emailAddress: req.body.emailAddress,
        age: req.body.age,
        address: req.body.address,
        aadharNumber: req.body.aadharNumber,
        passWord: req.body.passWord,
        gender: req.body.gender,
      });
      await User.save();
      res.send("User added successfully");
    } else {
      res.send("User already exist");
    }
  } catch (err) {
    res.send(err);
  }
};

const getUsers = (req, res) => {
  Users.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getUser = (req, res) => {
  console.log(req.body);
  Users.find({ userName: req.body.userName, passWord: req.body.passWord })
    .then((result) => {
      if (result.length === 0) {
        res.send({ message: "User not found" });
      } else {
        let token = jwt.sign(
          {
            data: result,
          },
          "secret",
          { expiresIn: 100 }
        );
        res.send({ message: "User logged in successfully", token: token });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateUser = (req, res) => {
  const id = req.params.id;

  Users.findByIdAndUpdate(id, {
    userName: req.body.userName,
    mobileNumber: req.body.mobileNumber,
    emailAddress: req.body.emailAddress,
    age: req.body.age,
    address: req.body.address,
    aadharNumber: req.body.aadharNumber,
    passWord: req.body.passWord,
    gender: req.body.gender,
  }).then((result) => {
    res.send(result);
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id).then((result) => {
    Users.find().then((result) => {
      res.send(result);
    });
  });
};

module.exports = { addUser, getUsers, deleteUser, updateUser, getUser };
