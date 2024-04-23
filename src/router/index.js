import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from "../components/HelloWorld.vue";
import Vinsmakinger from "../components/Vinsmakinger.vue";
import About from '../components/About.vue';

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/smakinger', name: 'smakinger', component: Vinsmakinger },
  { path: '/om-oss', name: 'omoss', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;