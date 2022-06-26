const soldierInfo = require("../../models/general/soldierInfo");

exports.findById = async(req, res) => {
  const soldierInfo = await soldierInfo.findOne().where({_id:req.params.id})
  
  if(!soldierInfo){
      res.status(500).json({success: false})
  }
  res.send(soldierInfo)
  
 }

 exports.findByUnitId = async(req, res) => {
  var unitId = req.params.id;
  var unitName;
  //change the unitId to the unit id from the database in the unit table
  if(unitId=="62b810bd51dc4a6e1f42dae5"){
     unitName ="יחידה 1";
  }
  if(unitId=="62b8119751dc4a6e1f42dae7"){
    unitName ="יחידה 2";
  }
  if(unitId=="62b855c251dc4a6e1f42daec"){
    unitName ="יחידה 3";
  }

   soldierInfo.find({unit:unitName})
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
  soldierInfo.findByIdAndUpdate(req.params.soldierInfoId,req.body)
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    soldierInfo.deleteOne({ _id: req.params.id })
    .then((soldierInfo) => res.json(soldierInfo))
    .catch((err) => res.status(400).json("Error: " + err));
};