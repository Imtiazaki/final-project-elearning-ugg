const akunRoutes = require('express').Router()
const AkunController = require("../controllers/AkunController")

akunRoutes.get('/', AkunController.getAkun)
akunRoutes.get('/:nomorInduk', AkunController.getAkunByNoInduk)
akunRoutes.post('/create', AkunController.create)
akunRoutes.delete('/delete/:id', AkunController.delete)
akunRoutes.put('/update/:id', AkunController.update)

module.exports = akunRoutes