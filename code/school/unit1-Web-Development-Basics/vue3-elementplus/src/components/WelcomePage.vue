<template>
<div>
    <details>
        <summary>根组件App.vue布局</summary>
        <p>（1）根组件主要包含三种Element-Plus组件标签：头部el-header、侧边栏el-aside和主内容区el-main。</p>
        <p>（2）使用容器组件el-container>嵌套el-aside和el-main实现组件并排关系，比并排div需要写CSS样式方便。</p>
        <p>（3）el-aside和el-main在一个el-container内，是左右结构。</p>
        <p>（4）在el-main内放置用于通过菜单项链接显示被加载Vue组件的router-view。</p>
    </details>
    <details>
        <summary>菜单设计与动态加载和渲染Vue组件</summary>
        <p>（1）在侧边栏，使用Element-Plus菜单组件，依次有Element-Plus标签：el-menu、el-menu-item和el-sub-menu。</p>
        <p>（2）菜单的菜单项与子菜单，默认是垂直的。</p>
        <p>（3）在子菜单标签里，需要使用插槽语法——template标签。</p>
        <p>（4）对el-menu应用属性 active-text-color，设置选中菜单项时的颜色。单击子菜单，只会展开与折叠。</p>
        <p>（5）对el-menu同时应用Vue语法:default-active="$route.path"和router。其中，$route.path是Vue Router中的一个属性。</p>
        <p>（6）对el-menu-item应用属性index。当路由路径与index属性值匹配时，加载对应的Vue组件。</p>
        <p>（7）共同点：Vue路由链接方式与Element-Plus菜单驱动方式，都要创建和使用路由对象。</p>
        <p>（8）不同点：路由链接方式提供更多的功能，例如路由守卫、参数传递、动态路由等。菜单驱动方式适合简单的页面切换，不涉及更复杂的路由功能。</p>
    </details>
</div>
</template>

<style scoped>
  ul li{
      line-height: 1.5em;
      font-size: 1.25em;
  }
  details{
      margin-top: 30px;
  }
  summary{
      font-weight: bold
  }
</style>
