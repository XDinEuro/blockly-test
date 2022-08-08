import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import { i18n } from "@/core/i18n/config";
app.use(i18n);
app.mount('#app')
