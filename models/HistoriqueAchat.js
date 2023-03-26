const mongoose = require('mongoose')

const HistoriqueAchatSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    }
},{collection:'historiqueAchat'})

const HistoriqueAchat = mongoose.model('historiqueAchat', HistoriqueAchatSchema);
module.exports = HistoriqueAchat;