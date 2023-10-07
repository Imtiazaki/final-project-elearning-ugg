const loggedRoutes = require('express').Router()
const LoggedController = require("../controllers/LoggedController")

loggedRoutes.get('/', LoggedController.getLog)
loggedRoutes.post('/create', LoggedController.create)
loggedRoutes.delete('/delete/:id', LoggedController.delete)

module.exports = loggedRoutes