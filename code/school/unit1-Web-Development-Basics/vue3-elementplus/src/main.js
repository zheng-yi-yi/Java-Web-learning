import { createApp } from 'vue'
import App from './App.vue'
import index from "./router"

import ElementPlus from 'element-plus'   //需要先安装：npm install element-plus
import 'element-plus/dist/index.css'   //Element UI与Element-Plus样式文件的路径不同！

import axios from "axios"
//设置axios的基址，简化axios的使用。一个项目通常会多次发出axios请求，一般基址相同，只是方法不同。
const axiosInstance=axios.create({
    baseURL:'http://127.0.0.1:8084/study/'  //后端Spring Boot+MyBatis Plus项目的基地址
})

const app=createApp(App)
app.use(index).use(ElementPlus)
app.config.globalProperties.$axios = axiosInstance   //配置Vue实例的全局属性，以方便使用axios
app.mount('#app')