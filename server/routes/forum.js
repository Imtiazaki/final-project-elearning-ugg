const forumRoutes = require('express').Router()
const ForumController = require("../controllers/ForumController")

forumRoutes.get('/', ForumController.getForum)
forumRoutes.post('/create', ForumController.create)
forumRoutes.delete('/delete', ForumController.delete)
forumRoutes.delete('/delete/:id', ForumController.deleteById)
forumRoutes.get('/detail/:UserId', ForumController.getDetails)
forumRoutes.put('/update/:id', ForumController.update)

module.exports = forumRoutes