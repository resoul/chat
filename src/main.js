import './assets/css/app.css'
import './assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Breakpoint from "@/components/breakpoint.js";
import Notification from "@/components/notification.js";

const app = createApp(App)

app.config.globalProperties.$breakpoint = new Breakpoint();
app.config.globalProperties.$notification = Notification;

app.use(createPinia())
app.use(router)

app.mount('#app')
