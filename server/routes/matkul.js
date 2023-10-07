const matkulRoutes = require('express').Router()
const MatkulController = require("../controllers/MatkulController")

matkulRoutes.get('/', MatkulController.getMatkul)
matkulRoutes.post('/create', MatkulController.create)
matkulRoutes.delete('/delete/:id', MatkulController.delete)

module.exports = matkulRoutes