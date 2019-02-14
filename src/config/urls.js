
const serverDict = {
  'sameDomain': '',
  'test': 'http://localhost:3001',
  'prod': 'http://localhost:3002'
}
const ctx = serverDict['sameDomain']

/*eslint-disable*/
// npm run dev: webpack.DefinePlugin定义SERVER是sameDomain, ctx是''
// npm run build: webpack.DefinePlugin定义SERVER是sameDomain, ctx是''
// npm run build-test: webpack.DefinePlugin定义SERVER是test, ctx是测试服地址
// npm run build-prod: webpack.DefinePlugin定义SERVER是prod, ctx是生成服地址
// const ctx = serverDict[SERVER]
/*eslint-disable*/

export default {
  product_all: `${ctx}/product/all`,
  product_buy: `${ctx}/product/buy`
}
