const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const soldierEvaluationSchema = new mongoose.Schema({
    //general info
    date:{type:Date,ref:'Date'},
    evalType:{type:ObjectId,ref:'EvalType'},
    evalTypeDetails:{type:ObjectId,ref:'EvalTypeDetails'},
    unit:{type:ObjectId,ref:'Unit'},
    profession:{type:ObjectId,ref:'Profession'},

    //strengths and weaknesses
    professionLevel:[{type:ObjectId,ref:'ProfessionLevel'}],
    maritalStatus:{type:ObjectId,ref:'MaritalStatus'},
    civilianProfession:{type:ObjectId,ref:'CivilianProfession'},
    education:{type:ObjectId,ref:'Education'},
    age:{type:ObjectId,ref:'Age'},
    gender:{type:ObjectId,ref:'Gender'},
    profile:{type:ObjectId,ref:'Profile'},
    phoneNum:{type:ObjectId,ref:'PhoneNum'},

    //individual indication
    bereavedFather:{type:ObjectId,ref:'BereavedFather'},
    metzachInvestigation:{type:ObjectId,ref:'MetzachInvestigation'},
    loneSoldier:{type:ObjectId,ref:'LoneSoldier'},
    onlyChild:{type:ObjectId,ref:'OnlyChild'},
    bereavedChild:{type:ObjectId,ref:'BereavedChild'},
    exHostage:{type:ObjectId,ref:'ExHostage'},
    inYeshiva:{type:ObjectId,ref:'InYeshiva'},

});

const soldierEvaluation = mongoose.model('soldierEvaluation', soldierEvaluationSchema);

module.exports = soldierEvaluation;