<template>
<div>
    <div style="margin-top: 20px">
        <el-input v-model="collegeName" prefix-icon="el-icon-search"
                  placeholder="输入学院名称关键字进行查询"
                  style="float: left;width: 250px;"
                  clearable @change="findAllColleges"/>
        <el-button  @click="searchCollege()" style="float: left;margin-left:20px">查询</el-button>
    </div>
    <el-table v-bind:data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column label="序号" prop="xuhao" width="auto" />
        <el-table-column label="学院名称" prop="name" width="auto" />
    </el-table>
    <div class="block" style="margin-top:15px">
        <el-pagination
            :current-page="currentPage"
            :page-size="pageSize"
            :total="tableData.length"
            :page-sizes="[1,5,10,20]"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
        </el-pagination>
    </div>
    <div style="margin-top: 25px">
        <details>
            <summary>模糊查询学院</summary>
            <p>（1）在文本输入框组件标签el-input里，双向绑定Vue组件属性collegeName。</p>
            <p>（2）使用属性placeholder给出提示信息。</p>
            <p>（3）使用属性clearable，控制是否显示清空按钮。</p>
            <p>（4）定义事件change及其事件处理方法，将当前输入框的值作为参数传递给相应的事件处理函数。</p>
        </details>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[],
            currentPage: 1,  //当前页序号
            total: '',   //总记录数
            pageSize: 5,  //页大小（每页记录数）
            collegeName:''  //学院搜索关键字
        }
    },
    methods: {
        findAllColleges() {
            this.$axios.get("findAllColleges")
                .then(res => {
                    console.log(res.data)
                    if (res.data.code== 1) {
                        this.tableData = res.data.data
                    } else {
                        this.$message.error(res.data.msg)
                    }
                }).catch(err => {
                console.log(err)
                this.$message.error("Web请求错误!")
            })
        },
        handleSizeChange(val) {
            this.currentPage = 1;
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        searchCollege() {  //根据学院名称搜索
            this.$axios.post('findCollegesByNameLike', {
                name: this.collegeName
            }).then(res => {
                if (res.data.code == 1) {  //返回记录
                    this.tableData = res.data.data
                } else {
                    return this.$message.error(res.data.msg)
                }
            }).catch(err => {
                console.log(err)
                this.$message.error("Web请求参数错误或数据库服务器错误！")
            })
        }
    },
    mounted() {
        this.findAllColleges()
    }
}
</script>
