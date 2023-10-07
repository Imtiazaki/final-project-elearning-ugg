const absensiRoutes = require('express').Router()
const AbsensiController = require("../controllers/AbsensiController")

absensiRoutes.get('/', AbsensiController.getAbsen)
absensiRoutes.post('/create', AbsensiController.create)
absensiRoutes.delete('/delete/:id', AbsensiController.delete)

module.exports = absensiRoutes