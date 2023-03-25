const PanierModel = require("../models/PanierModel");
const mongoose = require("mongoose");

const getPanier = async (req, res, next) => {
  try {
    const produits = await PanierModel.find();
    res.json(produits);
  } catch (err) {
    throw err.message;
  }
};

const ajouterAuPanier = async (panierId, produit, quantite = 1) => {
  const panier = await PanierModel.findById(panierId);
  const produitExistant = panier.panierProduit.find((item) => item.produit._id.toString() === produit._id.toString());
  if (produitExistant) {
    produitExistant.quantite += quantite;
  } else {
    panier.panierProduit.push({ produit, quantite });
  }
  await panier.save();
};

const addPanier = async (req, res, next) => {
  try {
    const { panierId, produit, quantite } = req.body;
    await ajouterAuPanier(panierId, produit, quantite);
    const updatedPanier = await PanierModel.findById(panierId);
    res.status(201).json(updatedPanier);
  } catch (err) {
    throw err.message;
  }
};

module.exports = { getPanier, addPanier };
