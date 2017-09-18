<template>
    <div class="login">
        <el-form :model="loginForm" :rules="rule" ref="loginForm" label-position="right" label-width="0px">
            <h3 class="title">管理员登录</h3>
            <el-form-item prop="account" >
                <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="请输入账号..."></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码..."></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: 'login',
    data () {
        return {
            loginForm:{
                account:"",
                password:""
            },
            rule:{
                account:[
                    {required:true,message:"请输入账号"}
                ],
                password:[
                    {required:true,message:"请输入密码"}
                ]
            }
        }
    },
    methods:{
        login:function(){
            var me = this;
            this.$refs['loginForm'].validate(function(valid){
                if(valid){
                    me.$message.success('登录成功');
                    me.$router.push({path:'manage/newslist'});
                }
            })
        }
    },
    created:function(){

    }
}
</script>


