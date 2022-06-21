const soldierEvaluation = require("../../models/general/soldierEvaluation");

exports.findById = async(req, res) => {
  const soldierEvaluation = await soldierEvaluation.findOne().where({_id:req.params.id})
  
  if(!soldierEvaluation){
      res.status(500).json({success: false})
  }
  res.send(soldierEvaluation)
  
 }

exports.find = (req, res) => {
    soldierEvaluation.find()
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const soldierEvaluation = new soldierEvaluation(req.body);
  soldierEvaluation.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  soldierEvaluation.findByIdAndUpdate(req.params.soldierEvaluationId,req.body)
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    soldierEvaluation.deleteOne({ _id: req.params.id })
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};