var express = require('express');
var router = express.Router();
var produitController =  require('../controller/ProduitController');

router.get('/', produitController.getProduits);
router.post('/add', produitController.addProduits);



module.exports = router;