<template>
    <div class="newsadd">
        <el-form ref="form" :model="form" label-width="80px" :rules="rule">
            <el-form-item label="新闻标题" prop="newstitle">
                <el-input v-model="form.newstitle"></el-input>
            </el-form-item>
            <el-form-item label="新闻类型" prop="newstype">
                <el-select v-model="form.newstype" placeholder="请选择活动区域">
                    <el-option label="类型1" value="1"></el-option>
                    <el-option label="类型2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="新闻内容" prop="newscontent">
                <el-input type="textarea" v-model="form.newscontent" rows="15"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="onSubmit('form')">新增</el-button>
                <el-button @click="clearForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: 'newsadd',
    data () {
        return {
            form: {
                newstitle: '',
                newstype: '',
                newscontent: ''
            },
            rule:{
                newstitle:[
                    {required:true,message:'新输入新闻标题'}
                ],
                newstype:[
                    {required:true,message:'请选择新闻类型'}
                ],
                newscontent:[
                    {required:true,message:'请输入新闻内容'}
                ]
            }
        }
    },
    methods:{
        onSubmit:function(formName) {
            var me = this;
             this.$refs[formName].validate(function(valid){
                 if(valid){
                    me.$confirm('您确定添加此条新闻吗', '警告', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        me.$message.success('添加成功');
                    }).catch(function(){
                        
                    })
                 }
             })
        },
        clearForm:function(formName){
            this.$refs[formName].resetFields();
        }
    },
    created:function(){

    }
}
</script>


