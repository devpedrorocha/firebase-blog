import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// global styles
import './assets/main.css'

createApp(App).use(router).use(store).mount('#app')
