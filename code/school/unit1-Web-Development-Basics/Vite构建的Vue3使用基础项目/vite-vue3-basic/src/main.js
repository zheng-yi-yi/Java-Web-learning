import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"  //import router from "./router/index.js"

//在Vue 3项目里使用百度地图，需要先安装模块依赖  npm install vue-baidu-map-3x
import BaiduMap from 'vue-baidu-map-3x'

const app = createApp(App)

//BaiduMap是显示地图的容器组件，可以在其内设置地图的配置项和样式。
app.use(BaiduMap, {
    ak: ''  //注册百度应用的key，适合于Vue 3项目。
    //ak:'' //适合于Vue 2项目的key。使用它，搜索功能将失效。
})

app.use(router)    //使用路由是进行路由链接的前提
app.mount('#app')
//对axios的使用，本项目未在main.js里配置。实际项目，一般都在本文件里配置。


