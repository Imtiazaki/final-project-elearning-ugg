import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/forum'

const getForum = async (cb) => {
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

const addForum = async (forum) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + "/create",
            data: forum
        })


        Swal.fire(
            'Add Forum',
            'Forum has been added',
            'success'
        )
    } catch (e) {
        console.log(e)
    }
}

const removeItAll = async () => {
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
                    url: URL + '/delete'
                })

                Swal.fire(
                    'Deleted!',
                    'Forum has been deleted.',
                    'success'
                )
            }
        })

    } catch (e) {
        console.log(e)
    }
}

const removeForum = async (id) => {
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
                    'Forum has been deleted.',
                    'success'
                )
            }
        })
        

    } catch (e) {
        console.log(e)
    }
}
    const editForum = async (id, forum) => {
        try {
            let result = await axios({
                method: 'PUT',
                url: URL + '/update/' + id,
                data: forum
            })
    
            Swal.fire(
                'Edit Forum ' + id,
                'Forum ' + id + ' has been updated',
                'success'
            )
            console.log(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    const forumDetails= async (id, cb) => {
        try {
            let result = await axios({
                method: "GET",
                url: URL + '/detail/' + id
            })
    
            cb(result.data)
        } catch (e) {
            console.log(e)
        }
    }

export {
    getForum,
    addForum,
    removeForum,
    removeItAll,
    editForum,
    forumDetails,
}