
const serverDict = {
  'sameDomain': '',
  'test': 'your test server url',
  'prod': 'your prod server url'
}

/*eslint-disable*/
// npm run dev: webpack.DefinePlugin定义SERVER是sameDomain, ctx是'' 同域请求
// npm run build: webpack.DefinePlugin定义SERVER是sameDomain, ctx是'' 同域请求
// npm run build-test: webpack.DefinePlugin定义SERVER是test, ctx是测试服地址 跨域请求
// npm run build-prod: webpack.DefinePlugin定义SERVER是prod, ctx是生产服地址 跨域请求
const ctx = serverDict[SERVER]
/*eslint-disable*/

export default {
  product_all: `${ctx}/product/all`,
  product_buy: `${ctx}/product/buy`
}
