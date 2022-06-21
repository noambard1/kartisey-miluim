const soldierInfo = require("../../models/general/soldierInfo");

exports.findById = async(req, res) => {
  const soldierInfo = await soldierInfo.findOne().where({_id:req.params.id})
  
  if(!soldierInfo){
      res.status(500).json({success: false})
  }
  res.send(soldierInfo)
  
 }

exports.find = (req, res) => {
    soldierInfo.find()
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const soldierInfo = new soldierInfo(req.body);
  soldierInfo.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  soldierInfo.findByIdAndUpdate(req.params.soldierInfoId,req.body)
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    soldierInfo.deleteOne({ _id: req.params.id })
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};