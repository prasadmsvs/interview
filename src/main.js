import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "./router/routes.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: createWebHashHistory(),
routes, // short for `routes: routes`
})
createApp(App).use(store).use(router).mount('#app')
