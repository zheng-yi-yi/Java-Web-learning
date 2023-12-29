import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/components/WelcomePage.vue"
import TablePaging from "@/components/TablePaging.vue"
import VagueQuery from "@/components/VagueQuery.vue"
import CollegeManage1 from "@/components/CollegeManage1.vue"
import CollegeManage2 from "@/components/CollegeManage2.vue"

const routes = [   /* 配置路由表建立映射浏览器地址与Vue组件的映射关系*/
  {path: "/",component: WelcomePage},
  {path: "/table-paging",component: TablePaging},
  {path: "/vague-query",component: VagueQuery},
  {path: "/collegeManage1",component: CollegeManage1},
  {path: "/collegeManage2",component: CollegeManage2}
];

const index = new createRouter({
  history:createWebHistory(),
  routes
});
export default index;  //导出路由对象