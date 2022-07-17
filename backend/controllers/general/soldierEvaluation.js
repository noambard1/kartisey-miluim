const soldierEvaluation = require("../../models/general/soldierEvaluation");

exports.findById = async(req, res) => {
  soldierEvaluation.find({_id:req.params.id})
 .then((soldierEvaluation) => res.json(soldierEvaluation))
   .catch((err) => res.status(400).json("Error: " + err));
 
}

exports.find = (req, res) => {
    soldierEvaluation.find()
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  let soldierEval = new soldierEvaluation(req.body);
  soldierEval.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  soldierEvaluation.findByIdAndUpdate(req.params.id,req.body)
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    soldierEvaluation.deleteOne({ _id: req.params.id })
    .then((soldierEvaluation) => res.json(soldierEvaluation))
    .catch((err) => res.status(400).json("Error: " + err));
};