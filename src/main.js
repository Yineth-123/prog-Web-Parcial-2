import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css_style.css'

// ✅ Importar Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // ✅ Activar Pinia
app.use(router)
app.mount('#app')




