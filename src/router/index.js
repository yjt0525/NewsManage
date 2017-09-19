import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Manage from '@/components/view/Manage'
import NewsList from '@/components/manageComponents/NewsList'
import NewsAdd from '@/components/manageComponents/NewsAdd'

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
            { path: 'newslist', component: NewsList, name: 'newslist' },
            { path: 'newsadd', component: NewsAdd, name: 'newsadd' }
        ]
    }]
})