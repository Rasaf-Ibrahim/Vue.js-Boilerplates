import { createApp } from 'vue'
import router from './router';
import App from './App.vue'

import './scss/index.scss'

createApp(App).use(router).mount('#app')
