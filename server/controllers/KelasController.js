const { Kelas } = require('../models')

class KelasController {
    static getKelas(req, res) {
        Kelas.findAll()
            .then(kelas => {
                res.json(kelas)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { pertemuan, idMatkul, absensi, quiz, forum, link } = req.body
        Kelas.create({
            pertemuan, idMatkul, absensi, quiz, forum, link
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

        Kelas.destroy({
            where: { id }
        })
            .then(result => {
                // if (result === 1) {
                //     res.json({
                //         message: `Id ${id} has been deleted!`
                //     })
                // } else {
                //     res.json({
                //         message: `Couldn't delete ${id}.'`
                //     })
                // }

                // ternary
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

module.exports = KelasController