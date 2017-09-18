<template>
    <div class="newslist">
        <div class="header-operation">
            <el-form :inline="true">
                <el-form-item>
                    <el-input placeholder="请输入关键词" icon="search" v-model="keyword" :on-icon-click="bindsearch"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addnews">新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class='card-list flex'>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">这是标题</span>
                </div>
                <div class="news-content">
                    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">青春</div> 
                    <div class="publish-time">2017-09-09 14:50:00</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove"></el-button>
                </div>
            </el-card>
        </div>
        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                :current-page="pageIndex"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default {
    name: 'newslist',
    data () {
        return {
            keyword:'',
            pageIndex:1
        }
    },
    methods:{
        bindsearch:function(){
            console.log('搜索了');
        },
        addnews:function(){
            console.log('新建了');
        },
        bindremove:function(){
            this.$confirm('您确定删除此条新闻吗', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                 this.$message.success('删除成功');
            }).catch(function(){

            })
        },
        handleSizeChange:function(val){
            console.log(val);
        },
        handleCurrentChange:function(val){
            console.log(val);
        }
    },
    created:function(){

    }
}
</script>


