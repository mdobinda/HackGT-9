import axios from 'axios'
const getSounds = async () => {
    return await axios.get('http://127.0.0.1:8000/list')
          .then((response) => {
            return response.data;
          })
          .catch(error => console.error('Error: ', error));
}

export default getSounds