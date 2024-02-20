import './assets/css/app.css'
import './assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './Application.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
