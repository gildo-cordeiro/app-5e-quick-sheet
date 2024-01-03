import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(library).use(VueAxios, axios).mount('#app')
