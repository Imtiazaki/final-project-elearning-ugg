import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/kelas'

const getKelas = async (cb) => {
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

const removeKelas = async (id) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: "DELETE",
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    } catch (e) {
        console.log(e)
    }
}

export {
    getKelas
}