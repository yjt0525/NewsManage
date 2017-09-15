import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Manage from '@/components/Manage/Manage'
import NewsManage from '@/components/Manage/NewsManage'


import '../assets/css/main.css';
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.use(Router)
Vue.use(ElementUI)


export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/manage',
        name: 'Manage',
        component: Manage,
        children: [
            { path: 'newsnamage', component: NewsManage, name: 'newsnamage' }
        ]
    }]
})