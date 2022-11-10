import { createApp, reactive } from 'vue';
import { createPinia } from 'pinia'

import AppWrapper from './components/AppWrapper.vue';
import router from './router/index';
import './axios'; //baseURL

import './assets/styles/layout.scss';
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';

//PrimeVue Material Design Theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';

//PrimeVue Components
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import ConfirmationService from 'primevue/confirmationservice';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Password from 'primevue/password';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';

import CodeHighlight from './components/AppCodeHighlight';

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(AppWrapper);

app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

app.use(ConfirmationService);
app.use(router);
app.use(createPinia());

//Toast Service
app.use(ToastService);

//PrimeVue Configuration
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-checkbox', Checkbox);
app.component('pv-chip', Chip);
app.component('pv-dataView', DataView);
app.component('pv-data-view-layout-options', DataViewLayoutOptions);
app.component('pv-dropdown', Dropdown);
app.component('pv-image', Image);
app.component('pv-input-text', InputText);
app.component('pv-menu', Menu);
app.component('pv-password', Password);
app.directive('badge', BadgeDirective);
app.directive('code', CodeHighlight);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('tooltip', Tooltip);
app.mount('#app');