<template>
  <div class='leftmenu'>
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" theme="light">
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
</template>
