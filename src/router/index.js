import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '@/views/index/index.vue'
import LayoutView from '@/views/layout/index.vue'
import MainView from '@/views/main/index/index.vue'
import HobbyView from '@/views/main/hobby/index.vue'
import LearningView from '@/views/main/learning/index.vue'
// import LoginView from '@/views/login/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: LayoutView,
            redirect: '/index', // 根路径默认跳转到/index
            children: [
                { path: 'index', name: 'index', component: IndexView },
                {
                    path: 'main',
                    name: 'main',
                    component: MainView,
                    redirect: '/main/hobby', // 默认跳转到/main/hobby
                    // main的嵌套路由
                    children: [
                        {
                            path: 'hobby', // 子路由路径（完整路径为 /main/hobby）
                            name: 'main.hobby',
                            component: HobbyView
                        },
                        {
                            path: 'learning', // 完整路径为 /main/learning
                            name: 'main.learning',
                            component: LearningView
                        },
                        // 可以添加更多子路由...
                    ]
                },
            ]
        },
        // { path: '/login', name: 'login', component: LoginView }
    ]
})

export default router