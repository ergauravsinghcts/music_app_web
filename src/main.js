import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import 'quasar/dist/quasar.css'
import {Quasar} from 'quasar'
// import quasar icons from quasar extras
import '@quasar/extras/material-icons/material-icons.css'


const app = createApp(App)
app.use(router)
app.use(Quasar)
app.mount('#app')
