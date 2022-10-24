import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';
import Chip from 'primevue/chip';
import Image from 'primevue/image';
import { createApp, reactive } from 'vue';
import router from './router/index';
import AppWrapper from './components/AppWrapper.vue';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';
import ConfirmationService from 'primevue/confirmationservice';
import Password from 'primevue/password';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

import Tooltip from 'primevue/tooltip';

import CodeHighlight from './components/AppCodeHighlight';

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(AppWrapper);

app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('code', CodeHighlight);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);
app.component('DataView', DataView);
app.component('Dropdown', Dropdown);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Button', Button);
app.component('Chip', Chip);
app.component('Image', Image);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Menu', Menu);

app.mount('#app');