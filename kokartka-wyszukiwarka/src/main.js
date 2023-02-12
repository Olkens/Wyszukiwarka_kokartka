import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faX, faCheck, faAngleLeft, faPhone, faEnvelope, faArrowDown  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faX, faCheck, faAngleLeft, faPhone, faEnvelope, faArrowDown)


const app = createApp(App).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).use(router)

app.mount('#app')
