//导入Vue 3路由对象
import { createRouter, createWebHistory } from 'vue-router'

//导入自定义的Vue 3组件。@符号在导入语句中通常表示当前路径的别名，@在Vue CLI创建的项目中默认被配置为指向src目录，可用./替换。
import WelcomePage from "@/components/WelcomePage.vue"
import TableForm from "@/components/TableForm.vue"
import MVVM from "@/components/MVVM.vue"
import BaiduMap from "@/components/BaiduMap.vue"
import DoubanFilm from "@/components/DoubanFilm.vue"

const routes = [   /* 配置路由表建立映射浏览器地址与Vue组件的映射关系*/
  {path: "/",component: WelcomePage},
  {path: "/mvvm",component: MVVM},
  {path: "/table-form",component: TableForm},
  {path: "/baidu-map",component: BaiduMap},
  {path: "/douban-film",component: DoubanFilm},
];

const router = new createRouter({  /* 创建路由对象router，供 main.js导入 */
  history:createWebHistory(),  /* HTML5 History 模式，取消地址栏默认的# */
  routes
});

export default router;  //导出路由对象



