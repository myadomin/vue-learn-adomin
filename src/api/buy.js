
import axios from 'axios'
import URL from './urls.js'

export default {
  getProductsBuy () {
    return axios.get(URL.product_buy).then(res => {
      return res.data
    })
  }
}
