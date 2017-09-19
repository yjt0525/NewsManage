<template>
    <div class='leftmenu'>
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" theme="light">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>新闻管理</template>
                <el-menu-item-group>
                    <el-menu-item index="/manage/newslist">新闻总览</el-menu-item>
                    <el-menu-item index="/manage/newsadd">新闻添加</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>评论管理</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
        <!-- <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item-group title="分组一">
            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组二">
            <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
        </el-menu-item-group>
        </el-menu> -->
    </div>
</template>
