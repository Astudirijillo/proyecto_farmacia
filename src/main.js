import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import Login from "./components/Login";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/login/:id?', name: 'login', component: Login },
    {path: '/home', component: Home},
    {path: '*', component: ErrorComponent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
