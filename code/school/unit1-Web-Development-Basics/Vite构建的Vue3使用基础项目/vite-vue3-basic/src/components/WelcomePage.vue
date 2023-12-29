<template>
  <div>
      <ul>
          <li>根组件App.vue的模板标签里，定义了<span>若干路由链接&lt;router-link&gt;和一个路由视图&lt;router-view/&gt;</span>。</li>
          <li>为了使用路由链接，需要定义<span>路由表</span>。路由表的<span>path属性定义了路由路径与组件的对应关系</span>。</li>
          <li><span>路由链接的to属性值</span>与路由表的path键名值相对应。</li>
          <li>欢迎页对应于组件WelcomePage.vue。</li>
          <li>组件MVVM.vue主要展示了<span>单向绑定、双向绑定、插值语法</span>、数组遍历等Vue 3语法。</li>
          <li>组件TableForm.vue展示了<span>使用表格显示二维表数据和表单提交</span>的用法。</li>
          <li>组件DoubanFilm.vue展示了使用<span>异步请求库axios</span>获取豆瓣电影信息的用法。</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {  //定义JSON格式的数据（Vue对象的属性）
        return {
            message: 'Hello Vue!',
            url: "",  //网址初始值为空
            textColor: 'redcss',  //选用红色样式redcss，还有bluecss
            todos: [
                {text: '学习 JavaScript'},
                {text: '学习 Node'},
                {text: '学习 Vue'}
            ],
            username:'',
            password:''
        }
    },
    methods: {  //定义方法（Vue对象的方法）
        reverseMessage: function () {  //自定义方法（一）
            //(1)将字符串拆分成字符数组(2)反序(3)拼接成字符串
            this.message = this.message.split('').reverse().join('')
        },
        setUrl() {  //自定义方法（二）
            this.url = 'http://www.wustwzx.com'
            alert('已经设置了教学网站网址，可以访问啦...')
        },
    },
    mounted() {  //生命周期方法，常用于初始化Vue组件，位置与 data和 methods平行
        //alert('aaa...')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
      line-height: 1.8em;
      font-size: 1.25em;
  }
  span {
      color: blue;
  }
</style>
