import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue')
            },
            {
                path: '/myDevices',
                name: 'myDevices',
                component: () => import('./components/MyDevices.vue')
            },
            {
                path: '/notifications',
                name: 'notifications',
                component: () => import('./components/Notifications.vue')
            },
            {
                path: '/myReports',
                name: 'myReports',
                component: () => import('./components/MyReports.vue')
            },
            {
                path: '/myPlan',
                name: 'myPlan',
                component: () => import('./components/MyPlan.vue')
            },
            {
                path: '/myProfile',
                name: 'myProfile',
                component: () => import('./components/MyProfile.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;