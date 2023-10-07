import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/akun'

const getAkun = async (cb) => {
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

export {
    getAkun,
}