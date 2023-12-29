<!--<template>
  <div>
      请参照之前的HTML项目（豆瓣电影）自行完成。
  </div>
</template>

<script>
export default {
    methods: {
        //定义方法（Vue对象的方法）
    },
    mounted() {  //生命周期方法，常用于初始化Vue组件，位置与 data和 methods平行
        //alert('aaa...')
    }
}
</script>

<style scoped>
    div {
        font-size: 30px;
        color: green;
        margin: 50px auto;
        width: 80%;
        height: 50%;
    }
</style>-->

<template>
    <details>
        <summary>异步请求库axios的使用。</summary>
        <p>（1）需要在命令行先使用npm install axios安装库依赖后，再使用import...from...导入模块。</p>
        <p>（2）使用axios，可向后台提交数据并返回结果数据。</p>
        <p>（3）axios.get()与axios.post()。</p>
    </details>
    <details>
        <summary>Vue的生命周期钩子方法。</summary>
        <p>在生命周期方法mounted()里，通过调用方法this.getDoubanFileInfo()去发送axios.get()请求</p>
    </details>

    <div><input v-model="filmId">&nbsp;<button @click="getDoubanFileInfo">获取豆瓣电影信息</button></div>
    <div>{{filmName}}</div>
    <div><img v-bind:src="filmPoster"></div>
    <div>{{filmDescription}}</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            filmId:10606004,
            filmName:'电影名称',
            filmPoster:'电影海报',
            filmDescription:'电影描述'
        }
    },
    methods: {
        getDoubanFileInfo(){
            //使用豆瓣电影后台接口；使用params实现带参数传递的get请求
            axios.get("https://movie.querydata.org/api",{
                params:{  //params称为异步GET请求的参数对象。https://movie.querydata.org/api?id=10606004不通用
                    id:this.filmId
                }
            }).then(res=>{
                // eslint-disable-next-line no-debugger
                debugger  //浏览时，按F12进入调试模式后，再按F5刷新屏幕才暂停在断点处，供分析运行情况。

                console.log(res.data)
                this.filmName=res.data.originalName;this.filmPoster=res.data.data[0].poster
                this.filmDescription=res.data.data[0].description
            }).catch(err=>{
                console.log(err)
                alert("请求失败！\n可能的原因如下：\n（1）两次请求的间隔未超过半分钟\n（2）请求的url或参数错误")
            })
        }
    },
    mounted() {
        this.getDoubanFileInfo()
    }
}
</script>
<style scoped>
details{
    line-height: 25px;
}
div {
    font-size: 20px;
    color: green;
    margin: 20px auto;
    width: 30%;
    height: 30%;
}
img{
    border: red 1px solid;
    width: 50%;
    width: 50%;
}
</style>
