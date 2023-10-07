const { Akun } = require('../models')

class AkunController {
    static getAkun(req, res) {
        Akun.findAll({
            order: [['nomorInduk', 'asc']]
        })
            .then(akun => {
                res.json(akun)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static getAkunByNoInduk(req, res) {
        const nomorInduk = +req.params.id
        Akun.findAll({
            where: { id }
        })
            .then(akun => {
                res.json(akun)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { nomorInduk, password, nama, role, profile } = req.body
        Akun.create({
            nomorInduk, password, nama, role, profile
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

        Akun.destroy({
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
        const { nomorInduk, password, nama, role, profile } = req.body

        Akun.update({
            nomorInduk, password, nama, role, profile
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
}

module.exports = AkunController