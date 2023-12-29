<template>
<div>
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
            <summary>表格组件、记录分页实现原理</summary>
            <p>（1）使用表格组件标签el-table定义表格，使用内嵌标签el-table-column定义表格的列。</p>
            <p>（2）el-table绑定属性data，el-table-column使用属性label显示列名、使用属性prop显示模型字段对应的数据。</p>
            <p>（3）在当前Vue组件里，定义表示当前页序号属性currentPage、页大小属性pageSize和表示总记录数属性total。</p>
            <p>（4）对分页组件标签el-pagination分别绑定上面三个属性外。</p>
            <p>（5）对el-pagination再绑定属性page-sizes。</p>
            <p>（6）对el-pagination应用属性layout，指定分页导航的外观布局。</p>
            <p>（7）对el-table绑定的数据属性tableData，应用方法slice((currentPage-1)*pageSize,currentPage*pageSize)。</p>
            <p>（8）对el-pagination定义分页大小改变事件@size-change和当前页改变事件@current-change，并在methods里定义相应的事件处理方法。</p>
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
                    console.log(res.data)
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
        }
    },
    mounted() {
        this.findAllColleges()
    }
}
</script>
