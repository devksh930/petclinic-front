import axios from 'axios'

const serviceHost = process.env.ROOT_API;
var config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export default {
  fetchVets: () => {
    // return axios.get(`${serviceHost}/open/vets`, config).then(r => r.data)
     return axios.get(`http://localhost:9460/open/vets`, config).then(r => r.data)
  }
}
