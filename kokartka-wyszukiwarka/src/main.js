import { createApp, VueElement } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faX  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faX)

const emitter = mitt();


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router)
app.config.globalProperties.emitter = emitter;
app.use(createPinia())

app.mount('#app')
