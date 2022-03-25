import { createApp } from 'vue'
import App from './App.vue'
import startcomponent from './components/startcomponent.vue'

import router from "./routers/index"
createApp(startcomponent).use(router).mount('#app')
