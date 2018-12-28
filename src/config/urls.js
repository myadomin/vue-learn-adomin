
const serverDict = {
  'localhost': '',
  'test': 'http://localhost:3001',
  'prod': 'http://localhost:3002'
}
/*eslint-disable*/
const ctx = serverDict[SERVER]
/*eslint-disable*/

export default {
  product_all: '/product/all',
  product_buy: '/product/buy',
  testget: `${ctx}/api/testget`,
  testpost: `${ctx}/api/testpost`
}
