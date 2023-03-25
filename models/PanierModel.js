const mongoose = require('mongoose')
const PanierProduitSchema = {
    produit: {
        type: {
            _id: {
                type: mongoose.Types.ObjectId,
                required: true
            },
            nom:{
                type: string,
                default: 'produit x'
            },
            prix:{
                type: number,
                default: 0
            },
        },
        requiered: true
    },
    quantite: {
        type: number,
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
    estConfirme:{
        type: Boolean,
        required: true,
    },
    panierProduit: {
        type: [PanierProduitSchema],
        required: true
    }
},{collection:'panier'})

const Panier = mongoose.model('panier', PanierSchema);
module.exports = Panier;