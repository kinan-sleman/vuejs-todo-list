import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// يتم استخدام الـ Store ضمن الـ app من خلال الـ use على الشكل التالي :
createApp(App).use(store).mount('#app')
