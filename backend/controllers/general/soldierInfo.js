const soldierInfo = require("../../models/general/soldierInfo");

exports.findById = async(req, res) => {
   soldierInfo.find({_id:req.params.id})
  .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
  
 }

 exports.findByUnitName = async(req, res) => {
  var unitName = req.params.unitName;
   soldierInfo.find({unit: unitName})
  .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
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
  soldierInfo.findByIdAndUpdate(req.params.soldierInfoId,req.body,{safe: true, upsert: true, new : true})
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.remove = (req, res) => {
    soldierInfo.deleteOne({ _id: req.params.id })
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};