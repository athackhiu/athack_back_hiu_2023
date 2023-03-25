const mongoose = require('mongoose')

const ExSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    }
},{collection:'exemple'})

const Exemple = mongoose.model('exemple', ExSchema);
module.exports = Exemple;