const Header = require("../Model/Header.js");

const addHeader = (req, res) => {
    const {name, content} = req.body.heading
  Header.find({ name: name }).then((result) => {
    if(result.length === 0){
        let header = new Header({
            heading:{name:name, content:content}
        })
        header.save();
        res.send("Header saved")
    }else{
        res.send("Header already exist")
    }
  });
};

const getHeader = (req,res) =>{
    Header.find().then((result)=>{
        res.send(result);
    })
}

module.exports = { addHeader, getHeader };
