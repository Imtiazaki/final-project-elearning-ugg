const { PemogramanDasarAc } = require('../models')

class PemogramanController {
    static getDasar(req, res) {
        PemogramanDasarAc.findAll()
            .then(forum => {
                res.json(forum)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const {  nomorInduk, nama, role, nilaiUjian, nilaiTugas, nilaiUjianAkhir, grade } = req.body
        PemogramanDasarAc.create({
             nomorInduk, nama, role, nilaiUjian, nilaiTugas, nilaiUjianAkhir, grade
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

        PemogramanDasarAc.destroy({
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

module.exports = PemogramanController