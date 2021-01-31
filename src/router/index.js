import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import OfferData from "../views/Offer_Data.vue"
import OfferData1 from "../views/Offer_Data1.vue"
import OfferData2 from "../views/Offer_Data2.vue"
import OfferData3 from "../views/Offer_Data3.vue"
import OfferData4 from "../views/Offer_Data4.vue"
import OfferData5 from "../views/Offer_Data5.vue"
import Reward from "../views/Reward.vue"
import PochiDetail from "../views/Pochi_Detail.vue"
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
    //ここだけなぜcomponent:YourPetにしなかったんじゃい？
    //一番上でimport YourPet from "../views/Pets.vue" にして、ここをcomponent:YourPetにしたほうが綺麗
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
  {
    path: "/pochidetail",
    name: "PochiDetail",
    component: PochiDetail,
  },
  {
    path: "/offerdata1",
    name: "OfferData1",
    component: OfferData1,
  },
  {
    path: "/offerdata2",
    name: "OfferData2",
    component: OfferData2,
  },
  {
    path: "/offerdata3",
    name: "OfferData3",
    component: OfferData3,
  },
  {
    path: "/offerdata4",
    name: "OfferData4",
    component: OfferData4,
  },
  {
    path: "/offerdata5",
    name: "OfferData5",
    component: OfferData5,
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
