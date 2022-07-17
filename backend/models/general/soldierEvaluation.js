const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const soldierEvaluationSchema = new mongoose.Schema({
    //general info
    date: String,
    evalType: String,
    evalTypeDetails: String,
    profession: String,
    soldierId: String,

    //mission evaluation
    missions:[
        {
            // number: String,
            missionDesc: String,
            missionEval: String
        }
    ],

    //professional evaluation
    profEval:[
        {
            findingProblems: String,
            professional: String,
            canWorkAlone: String,
            selfRestraint: String,
            overAllScore: String
        }
    ],

    //literal evaluation
    litEval: String,

    //writer info
    writerId: String,
    writerRank: String,
    writerName: String,
    writerProfession: String,
    writerDate: String
}, {timestamps: true});

const soldierEvaluation = mongoose.model('soldierEvaluation', soldierEvaluationSchema);

module.exports = soldierEvaluation;