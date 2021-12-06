import Vue from 'vue'
import VueRouter from 'vue-router'
import Criptos from '../views/Criptos.vue'
import Nfts from '../views/Nfts.vue'
import Data from '../views/Data.vue'
import Smart from '../views/Smart.vue'
import Finance from '../views/Finance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Criptos',
    component: Criptos
  },
  {
    path: '/nfts',
    name: 'NFTs-games-Metaverse',
    component: Nfts
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/smart',
    name: 'Smart Contracts',
    component: Smart
  },
  {
    path: '/finance',
    name: 'Decentralized finance',
    component: Finance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
