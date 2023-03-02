import { createApp } from 'vue'
import App from './App.vue'
import components from "./components/UI";

import './assets/main.css'

const app = createApp(App)

components.forEach(comp=>{
    app.component(comp.name,comp)
})

app.mount('#app')
