import { createApp } from 'vue'
import App from './App.vue'
import setupUI from './plugins/loadUI'

const app = createApp(App)
setupUI(app)

app.mount('#app')
