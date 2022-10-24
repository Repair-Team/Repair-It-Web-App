import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('../components/customer/Dashboard.vue')
            },
            {
                path: '/myDevices',
                name: 'myDevices',
                component: () => import('../components/customer/MyDevices.vue')
            },
            {
                path: '/notifications',
                name: 'notifications',
                component: () => import('../components/customer/Notifications.vue')
            },
            {
                path: '/myTimelines',
                name: 'myTimelines',
                component: () => import('../components/customer/MyTimelines.vue')
            },
            {
                path: '/myPlan',
                name: 'myPlan',
                component: () => import('../components/customer/MyPlan.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../components/Profile.vue')
            },
        ]
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: () => import('../views/SignUp.vue')
    },
    {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: () => import('../views/ForgotPassword.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;