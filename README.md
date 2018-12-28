### vue-temp-adomin
自己搭建的一套vue+webpack+vuex+vue-router+axios+elementUI的开发架子

### 使用
* `cnpm i` 安装包
* `npm start`或者`npm run dev` 启动本地开发环境，urls.js里的url请求到localhost，然后通过devServer proxy转发请求到模拟测试服(先启动模拟测试服)
* `npm run build-test` 打包 urls.js里的url请求到测试服(已设置cors跨域)
* `npm run build-prod` 打包 urls.js里的url请求到生产服(已设置cors跨域)
* `npm run server-test` 启动模拟测试服
* `npm run server-prod` 启动模拟生产服