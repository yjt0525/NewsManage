<template>
    <div class="manage flex flex-v">
        <topbar></topbar>
        <div class='content flex'>
            <sidenav></sidenav>
            <div class='mainview'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import http from '../../http.js'
import topbar from '../common/topbar'
import sidenav from '../common/sidenav'
export default {
    name: 'newsmanage',
    components:{
        topbar,sidenav
    },
    data () {
        return {
            
        }
    },
     mounted:function(){
        this.getList()
    },
    methods:{
        //async 表示一个async函数 await只能在这个函数中使用
        getList:async function(){
            let params={}
            //await 请求是异步的 此处await表示当请求结束后再执行下一句语句 将异步转变为同步 ----await 后最好跟着一个异步操作或者一个耗时操作
            const res = await http.get('/topic/5433d5e4e737cbe96dcef312',params)
            console.log(res) 
        }
    },
   
}
</script>


