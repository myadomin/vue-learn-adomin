const dev = ''
const test = 'http://localhost:3001'
const prod = 'http://localhost:3002'
const ctx = test

export default {
  product_all: '/product/all',
  product_buy: '/product/buy',
  testget: `${ctx}/api/testget`,
  testpost: `${ctx}/api/testpost`
}
