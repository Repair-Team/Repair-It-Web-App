import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue';
import Profile from '../components/Profile.vue'
import MyDevices from '../components/customer/MyDevices.vue'
import MyPlan from '../components/customer/MyPlan.vue'
import MyReports from '../components/customer/MyReports.vue'
import Devices from '../components/technician/Devices.vue'
import Repairs from '../components/technician/Repairs.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/app',
    name: 'app',
    component: App,
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/myDevices',
        name: 'myDevices',
        component: MyDevices
      },
      {
        path: '/myPlan',
        name: 'myPlan',
        component: MyPlan
      },
      {
        path: '/myReports',
        name: 'myReports',
        component: MyReports
      },
      {
        path: '/devices',
        name: 'devices',
        component: Devices
      },
      {
        path: '/repairs',
        name: 'repairs',
        component: Repairs
      },
    ]
  },
  {
    path: '/',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: ForgotPasswordView
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router