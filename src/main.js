import './assets/css/app.css'
import './assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Breakpoint from "@/components/breakpoint.js";

const app = createApp(App)

app.config.globalProperties.$breakpoint = new Breakpoint();

app.use(createPinia())
app.use(router)

app.mount('#app')
