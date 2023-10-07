const pemogramanRoutes = require('express').Router()
const PemogramanController = require("../controllers/PemogramanController")

pemogramanRoutes.get('/', PemogramanController.getDasar)
pemogramanRoutes.post('/create', PemogramanController.create)
pemogramanRoutes.delete('/delete/:id', PemogramanController.delete)

module.exports = pemogramanRoutes