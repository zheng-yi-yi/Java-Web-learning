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
    <!-- 修改学院 -->
    <el-dialog v-model="showEditCollegeDialog" title="编辑学院信息">
        <div style="text-align:center;line-height: 4em;color: chocolate">提示：若修改学院名称，将产生级联更新（专业、班级和学生等表）</div>
        <el-form :model="collegeForm">
            <el-form-item label-width="100px" label="学院名称" required="required">
                <el-input v-model="collegeForm.name"/>
            </el-form-item>
            <el-form-item label-width="100px" label="学院序号" required="required">
                <el-input v-model="collegeForm.xuhao"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="showEditCollegeDialog=false">取 消</el-button>
            <el-button @click="updateCollege" type="primary">更 新</el-button>
        </template>
    </el-dialog>
    <div style="margin-top: 25px">
        <details>
            <summary>使用对话框输入要修改的信息</summary>
            <p>（1）在Vue 3项目里控制对话框组件的显示，需要使用v-model绑定一个变量。</p>
            <p>（2）在对话框组件标签el-dialog单向绑定一个表单。</p>
            <p>（3）在表单标签的后面添加标签template并使用#footer或v-slot:footer定义插槽，显示对话框的底部内容——按钮。</p>
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
            collegeForm:{
                name:'',
                xuhao:''
            },
            oldName: '',  //用于修改学院名称
            showEditCollegeDialog:false
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
        handleUpdate(row) {
            this.oldName = row.name
            this.collegeForm.name = this.oldName
            this.collegeForm.xuhao = row.xuhao
            this.showEditCollegeDialog = true
        },
        updateCollege() {   //供对话框调用
            this.$axios.post('updateCollege', {
                oldName: this.oldName,   //名称字段是主键，作为更新记录的条件
                newName: this.collegeForm.name,  //字段值更新
                xuhao: this.collegeForm.xuhao  //字段值更新
            }).then(res => {
                if (res.data.code!=1){
                    return this.$message.error(res.data.msg)
                }else{
                    this.$message.success(res.data.msg)
                    this.findAllColleges()
                }
            }).catch(err => {
                console.log(err)
                this.$message.error("Web服务器或请求参数错误！")
            })
            this.showEditCollegeDialog=false
        },
        handleDelete(row) {  //删除学院
            this.$confirm('该操作将会删除学院所有数据以及该学院包含的专业、教师、学生等数据，确认删除吗？', '删除【' + row.name + '】', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(()=>{  //删除学院, deleteCollege
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
                    console.log(err)
                    this.$message.error("Web服务器或请求参数错误！")
                })
            }).catch(() => {
                this.$message.info('取消删除')
            })
        }
    },
    mounted() {  //生命周期方法，常用于初始化Vue组件，位置与 data和 methods平行
        this.findAllColleges()
    }
}
</script>

