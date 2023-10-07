const { Logged, Akun } = require('../models')

class LoggedController {
    static getLog(req, res) {
        Logged.findAll()
            .then(log => {
                res.json(log)
            })
            .catch(err => {
                res.json(err)
            })
    }
    
    static create(req, res) {
        const { nomorInduk, role } = req.body
        Logged.create({
            nomorInduk, role
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static delete(req, res) {
        const id = +req.params.id

        Logged.destroy({
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
}

module.exports = LoggedController