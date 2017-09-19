<template>
    <div class="headbar">
            <div class="logo">
                <img src="../../assets/img/logo.png" />
            </div>
            <div class="operation">
                <em>用户名</em>
                <el-button type="danger" @click="logout">
                    注销
                </el-button>
            </div>
        </div>
</template>
<script>
    export default{
        methods:{
            logout:function(){
                var me = this;
                this.$confirm('您确定要退出本系统吗', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    me.$message.success('注销成功');
                    me.$router.push({path:'/'});
                }).catch(function(){
                    
                })
            }
        }
    }
</script>

