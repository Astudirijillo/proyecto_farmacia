import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import Login from "./components/Login";
import RegistroUsuario from "./components/RegistroUsuario";
import RegistroProductos from "./components/RegistroProductos";
import RegistroProveedor from "./components/RegistroProveedor";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/login/:id?', name: 'login', component: Login },
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {path: '/registerUsers', component: RegistroUsuario},
    {path: '/registerProduct', component: RegistroProductos},
    {path: '/registerProveedor', component: RegistroProveedor},
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
