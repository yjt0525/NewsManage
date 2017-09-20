<template>
    <div class="newslist">
        <div class="header-operation">
            <el-form :inline="true">
                <el-form-item>
                    <el-input placeholder="请输入关键词" icon="search" v-model="keyword" :on-icon-click="bindsearch"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="addnews">新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class='card-list'>
            <el-card v-for="(item,index) in newslist" :key="item.id" class="box-card">
                <div slot="header" class="clearfix news-title">
                    <span style="line-height: 36px;">{{ item.newstitle }}</span>
                </div>
                <div class="news-content">
                    {{ item.newscontent }}
                </div>
                <div class="news-otherinfo">
                    <div class="news-type">{{ item.newstype }}</div> 
                    <div class="publish-time">{{ item.publishtime }}</div>
                    <el-button type="danger" class="remove-news" icon="delete" @click="bindremove(index,item)"></el-button>
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
            pageIndex:1,
            newslist:[{
                id:0,
                newstitle:'这是标题',
                newscontent:'1的内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:1,                
                newstitle:'这是标题',
                newscontent:'2的内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:2,                
                newstitle:'这是标题',
                newscontent:'这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:3,                
                newstitle:'这是标题',
                newscontent:'这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:4,                
                newstitle:'这是标题',
                newscontent:'这是内容这是内容这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:5,                
                newstitle:'这是标题',
                newscontent:'这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:6,                
                newstitle:'这是标题',
                newscontent:'这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            },{
                id:7,                
                newstitle:'这是标题',
                newscontent:'这是内容这是内容这是内容这是内容',
                newstype:'青春',
                publishtime:'2017-09-09 17:17:00'
            }]
        }
    },
    methods:{
        bindsearch:function(){
            console.log('搜索了');
        },
        addnews:function(){
            console.log('新建了');
        },
        bindremove:function(index,item){
            this.$confirm('您确定删除此条新闻吗', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.newslist.splice(index,1);
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


