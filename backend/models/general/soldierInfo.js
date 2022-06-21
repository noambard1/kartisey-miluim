const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const soldierInfoSchema = new mongoose.Schema({
    //general info
    soldierId: String,
    rank: String,
    name: String,
    unit: String,
    address: String,
    profession: String,
    professionLevel: String,
    maritalStatus: String,
    civilianProfession: String,
    education: String,
    age: Number,
    gender: String,
    profile: Number,
    phoneNum: String,

    //individual indication
    bereavedFather: Boolean,
    metzachInvestigation: Boolean,
    loneSoldier: Boolean,
    onlyChild: Boolean,
    bereavedChild: Boolean,
    exHostage: Boolean,
    inYeshiva: Boolean,

    //miluim summery
    eval: [Number]
});

const soldierInfo = mongoose.model('soldierInfo', soldierInfoSchema);

module.exports = soldierInfo;
