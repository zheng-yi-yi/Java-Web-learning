<!--设计要点：
  （1）本根组件没有调用其它组件，但通过路由链接激活其它组件并显示在路由视图区域。
  （2）通过路由链接激活其它组件显示在路由视图区域，to属性值一般与路由表里path相对应，显示在浏览器地址栏。
  （3）路由链接需要安装路由依赖、编写路由组件并在main.js里使用。
  -->
<template>
    <div>
        <img src="./assets/logo.svg"/>
        <router-link to="/" active-class="active-link">欢迎页</router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/mvvm" active-class="active-link">MVVM.vue</router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/table-form" active-class="active-link">TableForm.vue</router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/baidu-map" active-class="active-link">BaiduMap.vue</router-link>&nbsp;&nbsp;&nbsp;
        <router-link to="/douban-film" active-class="active-link">DoubanFilm.vue</router-link>
        <hr/>
        <router-view/>   <!--路由视图-->
    </div>
</template>

<style scoped>
  img{
      width: 5%;
  }
  /* router-link是Vue Router组件的一部分，用于创建路由链接，
     运行时会自动渲染为HTML的a标签，所以可以在样式中使用a选择器来修改链接的样式
  */
  a{
      text-decoration: none  /*取消路由链接默认的下划线*/
  }
  .active-link{  /*设置激活链接后链接文本的颜色*/
      color: red
  }
</style>


