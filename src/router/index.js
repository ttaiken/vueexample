import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home.vue'
import Productor from '@/views/productor/Productor.vue'
import Network from '@/views/productor/Network.vue'
import VM from '@/views/productor/VM.vue'
import Setting from '@/views/setting/Setting.vue'
import MesManage from '@/views/setting/MesManage.vue'

import UserManage from '@/views/setting/UserManage.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/setting',
        name: "setting",
        component: Setting,
        redirect: '/setting/user',
        meta: { title: 'Settings' },
        children: [{
            path: 'user',
            component: UserManage,
            name: 'usermanage',
            meta: { title: 'UserMnagement' }
        }, {
            path: 'message',
            component: MesManage,
            name: 'messagemanage',
            meta: { title: 'Messages' }
        }]
    },
    {
        path: '/productor',
        name: 'productor',
        component: Productor,
        //redirect: '/productor/home',
        meta: { title: 'Productor' },
        children: [{
            path: '/',
            name: 'productor',
            component: Productor,
            meta: { title: 'Productor' }
        },{

            path: 'vm',
            name: 'vm',
            component: VM,
            meta: { title: 'VM' }
        },{
            path: 'network',
            name: 'network',
            component: Network,
            meta: { title: 'Network' }

        }]
    }
]

// const routes = [
//     {
//       path: '/',
//       name: 'index',
//       component: require('../pages/Index.vue')
//     },
//     {
//       path: '/detail/:id',
//       name: 'detail',
//       component: require('../pages/Detail.vue')
//     }
//   ]

const router = new VueRouter({ 
    mode: 'history',
    base: __dirname,
    routes 
})

export default router

// const routes = [
//    { path: '/', component: Home },
//    { path: '/network', component: Network },
//    { path: '/vm', component: VM },
// ];
// const routes = [
//    { path: '/', component: Home },
//    {
//        path: '/productor',
//        component: Home,
//        meta: { breadcrumb: [{ href: '/productor', text: 'productor' }] },
//        children: [
//            {
//                path: 'vm',
//                component: VM
//            },
//            {
//                path: ':id',
//                component: VM,
//                meta: { breadcrumb: [{ href: '/productor', text: 'productor' },{href:'/vm',text: 'vm'}] },
//                children: [
//                    {
//                        path: '',
//                        component: VM
//                    },
//                    {
//                        path: 'edit',
//                        component: VM,
//                        meta: { breadcrumb: [{ href: '/productor', text: 'productor' }, { href: '/network', text: 'network' } ]}
//                    }
//                ]
//            }
//        ]
//    }
// ]