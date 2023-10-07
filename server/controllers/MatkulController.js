const { Matkul } = require('../models')

class MatkulController {
    static getMatkul(req, res) {
        Matkul.findAll()
            .then(matkul => {
                res.json(matkul)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const {  idMatkul, namaMatkul, nomorInduk, nama, kelompok, hari, waktu_mulai, waktu_selesai } = req.body
        Matkul.create({
             idMatkul, namaMatkul, nomorInduk, nama, kelompok, hari, waktu_mulai, waktu_selesai
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

        Matkul.destroy({
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

module.exports = MatkulController