import { createApp, VueElement } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'


const emitter = mitt();


const app = createApp(App).use(router)
app.config.globalProperties.emitter = emitter;
app.use(createPinia())

app.mount('#app')
