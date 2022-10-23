import axios from 'axios'
const getFile = async (id) => {
    return await axios.get(`http://127.0.0.1:8000/retrieve?id=${id}`)
          .then((response) => {
            console.log(response)
            return response.data;
          })
          .catch(error => console.error('Error: ', error));
}

export default getFile;