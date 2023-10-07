const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
            message: "Kelas"
    })
})

const kelasRoutes = require('./kelas');
const akunRoutes = require('./akun');
const forumRoutes = require('./forum');
const loggedRoutes = require('./logged');
const pemogramanRoutes = require('./pemograman');
const absensiRoutes = require('./absensi');
const matkulRoutes = require('./matkul');
route.use('/matkul', matkulRoutes)
route.use('/kelas', kelasRoutes)
route.use('/akun', akunRoutes)
route.use('/absensi', absensiRoutes)
route.use('/forum', forumRoutes)
route.use('/logged', loggedRoutes)
route.use('/pemograman', pemogramanRoutes)

module.exports = route 