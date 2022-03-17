import { createApp } from 'vue'
import App from './App.vue'

import SlideVerify from '../dist/dawn-vue3-slide-verify.es.js'
import '../dist/style.css'

createApp(App).use(SlideVerify).mount('#app')
