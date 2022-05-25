const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const soldierInfoSchema = new mongoose.Schema({
    //general info
    soldierId:{type:ObjectId,ref:'SoldierInfo'},
    rank:{type:ObjectId,ref:'Rank'},
    name:{type:ObjectId,ref:'Name'},
    unit:{type:ObjectId,ref:'Unit'},
    address:{type:ObjectId,ref:'Address'},
    profession:{type:ObjectId,ref:'Profession'},
    professionLevel:{type:ObjectId,ref:'ProfessionLevel'},
    maritalStatus:{type:ObjectId,ref:'MaritalStatus'},
    civilianProfession:{type:ObjectId,ref:'CivilianProfession'},
    education:{type:ObjectId,ref:'Education'},
    age:{type:ObjectId,ref:'Age'},
    gender:{type:ObjectId,ref:'Gender'},
    profile:{type:ObjectId,ref:'Profile'},
    phoneNum:{type:ObjectId,ref:'PhoneNum'},

    //individual indication
    bereavedFather:{type:Boolean,ref:'BereavedFather'},
    metzachInvestigation:{type:Boolean,ref:'MetzachInvestigation'},
    loneSoldier:{type:Boolean,ref:'LoneSoldier'},
    onlyChild:{type:Boolean,ref:'OnlyChild'},
    bereavedChild:{type:Boolean,ref:'BereavedChild'},
    exHostage:{type:Boolean,ref:'ExHostage'},
    inYeshiva:{type:Boolean,ref:'InYeshiva'},

});

const soldierInfo = mongoose.model('soldierInfo', soldierInfoSchema);

module.exports = soldierInfo;
