import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import Login from "./components/Login";
import RegistroUsuario from "./components/RegistroUsuario";
import RegistroProductos from "./components/RegistroProductos";
import RegistroProveedor from "./components/RegistroProveedor";
import Usuarios from "./components/Usuarios";
import Productos from "./components/Productos";
import Proveedores from "./components/Proveedores";
import ListadoUsuarios from "./components/ListadoUsuarios";
import ListadoProductos from "./components/ListadoProductos";
import ListadoProveedores from "./components/ListadoProveedores";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/login/:id?', name: 'login', component: Login },
    {path: '/home', component: Home},
    {path: '/', component: Login},
    {path: '/registerUsers', component: RegistroUsuario},
    {path: '/registerProduct', component: RegistroProductos},
    {path: '/registerProveedor', component: RegistroProveedor},
    {path: '/users', component: Usuarios},
    {path: '/products', component: Productos},
    {path: '/proveedor', component: Proveedores},
    {path: '/listUsers', component:ListadoUsuarios},
    {path: '/listProducts', component: ListadoProductos},
    {path: '/listProveedor', component: ListadoProveedores},
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
