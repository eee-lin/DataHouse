import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import OfferData from "../views/Offer_Data.vue"
import Reward from "../views/Reward.vue"
// import Contact from "../views/Contact.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/your_pet",
    name: "YourPet",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pets.vue"),
  },
  {
    path: "/offerdata",
    name: "OfferData",
    component: OfferData,
  },
  {
    path: "/reward",
    name: "Reward",
    component: Reward,
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact,
  // },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
