import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/logged'

const getLogged = async (cb) => {
    try {
        let kelas = await axios({
            method: 'GET',
            url: URL
        })
        cb(kelas.data)
    } catch (e) {
        console.log(e)
    }
}
const addLogin = async (log) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + "/create",
            data: log
        })
    } catch (e) {
        console.log(e)
    }
}

export {
    getLogged,
    addLogin,
}