var express = require('express');
var router = express.Router();
const paiementController = require('../controller/PaiementController')

router.get('/', function(req, res, next) { res.send('Paiements'); });
router.post('/pay', paiementController.pay)
router.get('/:id', paiementController.getPaiementDetails)
module.exports = router;