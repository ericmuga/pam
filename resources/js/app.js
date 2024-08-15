import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import MultiSelect from 'primevue/multiselect';                         //icons
import Button from 'primevue/button';
import Pagination from '@/Components/Pagination.vue'
import InputText from 'primevue/inputtext'
import { createPinia } from 'pinia'


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Prime Asset Manager';
const pinia = createPinia();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Toolbar)
            .use(PrimeVue)
            .use(pinia)
            .use(ZiggyVue, Ziggy)
            .component('Toolbar',Toolbar)
            .component('Button',Button)
            .component('InputText',InputText)
            .component('MultiSelect',MultiSelect)
            .component('Pagination',Pagination)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
