<template>
<div>
    <el-table v-bind:data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
        <el-table-column label="序号" prop="xuhao" width="auto" />
        <el-table-column label="学院名称" prop="name" width="auto" />
        <el-table-column fixed="right" label="操作" width="270px">
            <template #default="scope">
                <el-button
                        type="primary"
                        size="small"
                        @click="handleUpdate(scope.row)">修改</el-button>
                <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
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
            <summary>非模型字段与表格数据的使用</summary>
            <p>（1）操作列包含的按钮，并非是表格绑定的数据。</p>
            <p>（2）Vue.js默认的作用域插槽，在el-table-column的内嵌标签template使用scope表示作用域对象。</p>
            <p>（3）scope.row表示表格绑定数据对象的当前行对象。</p>
            <p>（4）对象scope.row作为事件处理方法的参数。</p>
        </details>
        <details>
            <summary>确认框的使用</summary>
            <p>（1）在Vue项目里使用Element-Plus的确认框：this.$confirm(message,title,options)。</p>
            <p>（2）message是必填项，表示向用户展示需要确认的信息。</p>
            <p>（3）title是任选项，表示确认框的标题文本。</p>
            <p>（4）options是任选项，是一个配置对象，用于自定义确认框的样式和行为。</p>
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
            pageSize: 5  //页大小（每页记录数）
        }
    },
    methods: {
        findAllColleges() {
            this.$axios.get("findAllColleges")
                .then(res => {
                    if(res.data.code==1){
                        this.tableData=res.data.data
                    }else{
                        this.$message.error(res.data.msg)
                    }
                }).catch(err => {
                console.log(err)
                this.$message.error("Web请求错误!")
            })
        },
        handleSizeChange(val) {   //处理分页器页大小改变
            this.currentPage = 1;
            this.pageSize = val;
        },
        handleCurrentChange(val) {  //处理分页器的当前页改变
            this.currentPage = val;
        },
        handleUpdate(row){    //只是提示一下，并未真正实现更新
            console.log(row)
            this.$confirm('准备更新的学院：'+row.xuhao+'--'+row.name,'更新学院',{
                confirmButtonText: '确定',
                showCancelButton: false, // 不显示取消按钮
                type:'info'
            }).then(()=>{
                //单击了确认框里的【确定】按钮后关闭确认框
            }).catch(()=>{
                //单击了确认框右上角的关闭按钮X后关闭确认框
            })
        },
        handleDelete(row) {  //删除学院
            this.$confirm('该操作将会删除学院所有数据以及该学院包含的专业、教师、学生等数据，确认删除吗？', '删除【' + row.name + '】', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(()=>{  //单击【确定】后
                this.$axios.post('deleteCollege', {
                    name: row.name
                }).then(res => {
                    if(res.data.code!=1){
                        this.initView()
                        this.$message.error("删除学院失败!")
                    }else{
                        this.$message.success("删除学院:"+row.name)
                    }
                    this.findAllColleges()
                }).catch(err => {
                    this.$message.error("Web服务器或请求参数错误！"+err)
                })
            }).catch(() => {
                this.$message.info('取消删除')
            })
        }
    },
    mounted() {
        this.findAllColleges()
    }
}
</script>
<style scoped>
    details{
       margin-top: 15px;
    }
</style>

