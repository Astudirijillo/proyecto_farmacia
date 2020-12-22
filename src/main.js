import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import Login from "./components/Login";
import RegistroUsuario from "./components/RegistroUsuario";
import RegistroProductos from "./components/RegistroProductos";
import RegistroProveedor from "./components/RegistroProveedor";
import ListadoUsuarios from "./components/ListadoUsuarios";
import ListadoProductos from "./components/ListadoProductos";
import ListadoProveedores from "./components/ListadoProveedores";
import EntradaStock from "./components/EntradaStock";
import SalidaStock from "./components/SalidaStock";
import Reportes from "./components/Reportes";
import AccessBar from "./components/AccessBar";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/login/:id?', name: 'login', component: Login },
    {path: '/home', component: Home},
    {path: '/', component: Login},
    {path: '/accessBar/', component: AccessBar},
    {path: '/registerUsers', component: RegistroUsuario},
    {path: '/registerProduct', component: RegistroProductos},
    {path: '/registerProveedor', component: RegistroProveedor},
    {path: '/listUsers', component:ListadoUsuarios},
    {path: '/addStock', component: EntradaStock},
    {path: '/discountStock', component: SalidaStock},
    {path: '/listProducts', component: ListadoProductos},
    {path: '/listProveedor', component: ListadoProveedores},
    {path: '/reports', component: Reportes},
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
