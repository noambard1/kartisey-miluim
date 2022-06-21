const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const soldierEvaluationSchema = new mongoose.Schema({
    //general info
    date: Date,
    evalType: String,
    evalTypeDetails: String,
    unit: String,
    profession: String,
    soldierId: String,

    //mission evaluation
    missions:[
        {
            number: Number,
            missionDesc: String,
            missionEval:{ type: Number, min: 1, max: 5 }
        }
    ],

    //literal evaluation
    litEval: String,

    //writer info
    writerId: String,
    writerRank: String,
    writerName: String,
    writerProfession: String,
    writerDate: Date
});

const soldierEvaluation = mongoose.model('soldierEvaluation', soldierEvaluationSchema);

module.exports = soldierEvaluation;