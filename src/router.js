import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/home"
import About from "@/views/about"
import Error from "@/views/error"
import CoinDetail from "@/views/CoinDetail"

Vue.use(Router);
export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      name: "error",
      component: Error
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    }
  ]
});
