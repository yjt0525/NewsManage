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
    methods:{
        
    },
    created:function(){

    },
    mounted:function(){
        
    }
}
</script>


