
const serverDict = {
  'localhost': '',
  'test': 'http://localhost:3001',
  'prod': 'http://localhost:3002'
}
/*eslint-disable*/
const ctx = serverDict[SERVER]
/*eslint-disable*/

// localhost通过webpack dev-server proxy转发到http://localhost:3001
// npm run build后 自动加上ctx, serverDict.test或者serverDict.prod, 请求3001或者3002

export default {
  product_all: '/product/all',
  product_buy: '/product/buy',
  testget: `${ctx}/api/testget`,
  testpost: `${ctx}/api/testpost`
}
