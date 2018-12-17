
import axios from '../utils/axios'
import URL from './urls.js'

export default {
  getProducts () {
    return axios.post(URL.product_all).then(res => {
      return res.data
    })
  }
}
