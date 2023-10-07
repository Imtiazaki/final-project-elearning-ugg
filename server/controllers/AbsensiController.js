const { Absensi } = require('../models')

class AbsensiController {
    static getAbsen(req, res) {
        Absensi.findAll()
            .then(forum => {
                res.json(forum)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { nomorInduk, pertemuan, idMatkul, keterangan, createdAt } = req.body
        Absensi.create({
            nomorInduk, pertemuan, idMatkul, keterangan, createdAt
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

        Absensi.destroy({
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

module.exports = AbsensiController