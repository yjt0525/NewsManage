<template>
    <div class="manage flex flex-v">
        <div class="headbar">
            <div class="logo">
                <img src="../../assets/img/logo.png" />
            </div>
            <div class="operation">
                <el-button type="primary" @click="logout">
                    注销
                </el-button>
            </div>
        </div>
        <div class='content flex'>
            <div class='leftmenu'>
                <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>新闻管理</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="/manage/newslist">新闻总览</el-menu-item>
                            <el-menu-item index="/manage/newsadd">新闻添加</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>评论管理</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </div>
            <div class='mainview'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'newsmanage',
    data () {
        return {
            
        }
    },
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
    },
    created:function(){

    },
    mounted:function(){
        
    }
}
</script>


