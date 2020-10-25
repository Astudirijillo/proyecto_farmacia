import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "@/components/Home";
import ErrorComponent from "@/components/ErrorComponent";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/', name: Home},
    {path: '/Home', name: Home},
    {path: '*', name: ErrorComponent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
