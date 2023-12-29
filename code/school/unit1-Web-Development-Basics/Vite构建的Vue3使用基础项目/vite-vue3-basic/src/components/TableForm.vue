<template>
    <div>
        <p><button @click="findAllColleges">模拟从后台获取二维表数据</button></p>
        <table>
            <tr><th>序号</th><th>学院名称</th></tr>
            <tr v-for="(item, index) in tableData" v-bind:key="index">
                <!--Vue指令v-for表示循环； 指令v-bind:key表示遍历项的唯一标识，其中v-bind可省略-->
                <td>{{ item.xuhao }}</td>
                <td>{{ item.name }}</td>
            </tr>
        </table>
        <div style="padding-top: 25px">
            用户名：<input type="text" v-model="loginForm.username"/>
            密码：<input type="password" v-model="loginForm.password"/>&nbsp;&nbsp;
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],  //表格数据
            loginForm:{   //登录表单
                username:'',  //表单字段
                password:''
            }
        }
    },
    methods: {
        findAllColleges() {
            this.tableData.push({"xuhao":"01","name":"计算机学院"})
            this.tableData.push({"xuhao":"02","name":"外语学院"})
            this.tableData.push({"xuhao":"03","name":"金融学院"})
        },
        login() {
            alert("你提交的用户名和密码分别是："+this.loginForm.username+","+this.loginForm.password)
        }
    }
}
</script>

<style scoped>
  p{
      text-indent: 2em;  /*首行缩进2个字符*/
      line-height: 1.5em;
  }
  table{
      width: 33%;
      border: 2px solid;  /*表格边框线*/
      border-collapse: collapse;  /*消除单元格之间的间隔*/
  }
  table td{
      border: 1px solid  /*表格里面的分隔线*/
  }
  details{
      margin-top: 15px
  }
  summary{
      font-weight: bold
  }
</style>
