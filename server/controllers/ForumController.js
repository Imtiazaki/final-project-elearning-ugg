const { Forum } = require('../models')

class ForumController {
    static getForum(req, res) {
        Forum.findAll({
            order: [['id', 'desc']]
        })
            .then(forum => {
                res.json(forum)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { idForum, nomorInduk, nama, title, komentar, profile } = req.body
        Forum.create({
            idForum, nomorInduk, nama, title, komentar, profile
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static delete(req, res) {
        Forum.destroy()
            .then(result => {
                result === 1 ?
                    res.json({
                        message: `all has been deleted!`
                    }) :
                    res.json({
                        message: `Couldn't delete it all'`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }
    
    static deleteById(req, res) {
        const id = +req.params.id

        Forum.destroy({
            where: { id }
        })
            .then(result => {
                result === 1 ?
                    res.json({
                        message: `Id ${id} has been deleted!`
                    }) :
                    res.json({
                        message: `Couldn't delete ${id}.'`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }
    static update(req, res) {
        const id = Number(req.params.id)
        const { idForum, nomorInduk, nama, title, komentar, profile } = req.body

        Forum.update({
            idForum, nomorInduk, nama, title, komentar, profile
        }, {
            where: { id }
        })
            .then(result => {
                result[0] === 1 ?
                    res.json({
                        message: `Id ${id} has been updated!`
                    }) :
                    res.json({
                        message: `Couldn't update id ${id}`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static getDetails(req, res) {
        const id = Number(req.params.UserId)

        Forum.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static search(req, res) {

    }

}

module.exports = ForumController