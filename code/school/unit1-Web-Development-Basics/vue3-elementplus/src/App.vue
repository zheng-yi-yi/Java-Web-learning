<template>
    <div>
        <el-header>
            <div id="systemName">在Vue 3项目里使用Element-Plus</div>
        </el-header>

        <el-container>
            <el-aside>
                <el-menu active-text-color="#FF6666" :default-active="$route.path" router >
                    <el-menu-item key="0" index="/">👉欢迎页面</el-menu-item>
                    <el-sub-menu>
                        <template #title>👉学院查询</template>  <!--插槽语法-->
                        <el-menu-item key="1" index="/table-paging">查询学院并以表格分页输出</el-menu-item>
                        <el-menu-item key="2" index="/vague-query">输入学院名关键字模糊查询</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu>
                        <template #title>👉学院管理</template>
                        <el-menu-item key="3" index="/collegeManage1">学院管理1</el-menu-item>
                        <el-menu-item key="4" index="/collegeManage2">学院管理2</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-main><router-view/></el-main>
        </el-container>
    </div>
</template>

<style scoped>
  img{
      width: 5%;
  }
  #systemName{
      font-size: 1.5em;
      font-weight: bold;
      margin-left: 35%;
      width: 55%;
  }
</style>
<script setup>
</script>