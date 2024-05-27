import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from "../components/HelloWorld.vue";
import Vinsmakinger from "../components/Vinsmakinger.vue";
import About from '../components/About.vue';
import AlleViner from "../components/AlleViner.vue";
import Vedtekter from "../components/Vedtekter.vue";

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/smakinger', name: 'smakinger', component: Vinsmakinger },
  { path: '/om-oss', name: 'om-oss', component: About },
  { path: '/vinoversikt', name: 'vinoversikt', component: AlleViner },
  { path: '/vedtekter', name: 'vedtekter', component: Vedtekter },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;