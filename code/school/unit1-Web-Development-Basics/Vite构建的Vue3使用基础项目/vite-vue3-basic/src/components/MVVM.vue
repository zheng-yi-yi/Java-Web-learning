<template>
  <div>
      <p>	Vue.js 的显著特点是数据驱动视图的响应式设计，由于将Model和View进行单向绑定或者双向绑定。</p>
      <p>单向绑定：把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。
          当希望对HTML的某些属性进行单向绑定时，只需在该属性前加v-bind:指令。</p>
      <p>双向绑定：把Model绑定到View的同时，也将View绑定到Model上。
          在 Vue 3 中，v-model 被称为模板语法糖，它实际上是两个独立指令v-bind和v-on的组合。</p>
      <p>	插值形式是{{data}}的形式，它本质上是单向绑定，只是使用上更加方便。</p>
      <p>	v-for是遍历语法。在Vue 3项目里，绑定属性key；循环体内通常使用插值语法。</p>
      <hr/>
      <!-- 单向绑定：使用插值、v-text、v-bind等方式 -->
      <p>{{message}}</p>
      <p v-text="message" v-bind:class="textColor"></p>
      <p><button v-on:click="reverseMessage">逆转消息</button></p>
      <button v-on:click="setUrl">设置教学网站网址</button>&nbsp;
      <a v-bind:href="url">访问教学网站</a>
      <!-- <a :href="url">访问教学网站</a> -->
      <ol>
          <li v-for="todo in todos" :key="todo.text">   <!-- 遍历数组集合 -->
              {{todo.text}}
          </li>
      </ol>
      <!-- 双向绑定：使用v-model属性，主要是用在表单元素，实现Model与View之间的双向绑定。-->
      <p>双向绑定示例：<input v-model="message"></p>
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
                {text: '学习 JavaScript'}, {text: '学习 Node'}, {text: '学习 Vue'}
            ],
            username:'', password:''
        }
    },
    methods: {  //定义方法（Vue对象的方法）
        reverseMessage: function () {  //自定义方法（一）
            //(1)将字符串拆分成字符数组  (2)反序  (3)拼接成字符串
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
    p {
        line-height: 1.5em;
        font-size: 1.25em;
    }

    .redcss {
        color: red;
    }

    .bluecss {
        color: blue;
    }
</style>
