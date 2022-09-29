import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../../src/repair-it/pages/home-view.vue"
import Devices from "../../src/repair-it/components/device/device-list.component.vue"
import SigIn from "../../src/repair-it/pages/login-view.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-view',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/devices',
            name: 'devices',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Devices
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SigIn

        }
    ]
})

export default router
