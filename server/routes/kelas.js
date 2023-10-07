const kelasRoutes = require('express').Router()
const KelasController = require("../controllers/KelasController")

kelasRoutes.get('/', KelasController.getKelas)
kelasRoutes.post('/create', KelasController.create)
kelasRoutes.delete('/delete/:id', KelasController.delete)

module.exports = kelasRoutes