const soldierInfo = require("../../models/general/soldierInfo");

exports.findById = async(req, res) => {
   soldierInfo.find({_id:req.params.id})
  .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
  
 }

 exports.findByUnitId = async(req, res) => {
  var unitid = req.params.unitid;
  let unitName;
  //change the unitId to the unit id from the database in the unit table
  if(unitid=="62bbf77cd78458a0ebd40d7e"){
     unitName ="יחידה 1";
  }
  if(unitid=="62bc2002d78458a0ebd40d97"){
    unitName ="יחידה 2";
  }
  if(unitid=="62bc200dd78458a0ebd40d98"){
    unitName ="יחידה 3";
  }
   soldierInfo.find({unit: unitName})
  .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
//   const soldierInfo88 = new soldierInfo({name: "יוסי כהן",unit:"יחידה 2"});
//   soldierInfo88.save((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     res.json(data);
//   });
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