const mongoose = require('mongoose')

const PanierProduitSchema = {
    produit: {
        type: {
            _id: {
                type: mongoose.Types.ObjectId,
                required: true
            },
            nom:{
                type: String,
                default: 'produit x'
            },
            prix:{
                type: Number,
                default: 0
            },
        },
        required: true
    },
    quantite: {
        type: Number,
        required: true,
        default: 0
    }
}

const PanierSchema = new mongoose.Schema({
    date:{
        type: Date,
        required:true,
        default: Date.now
    },
    panierProduit: {
        type: [PanierProduitSchema],
        required: true
    }
},{collection:'panier'})

const Panier = mongoose.model('panier', PanierSchema);
module.exports = Panier;