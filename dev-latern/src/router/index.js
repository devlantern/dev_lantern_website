import { createRouter, createWebHistory } from 'vue-router'

import HomePage      from '../pages/HomePage.vue'
import AboutPage     from '../pages/AboutPage.vue'
import codeChallenge from '../pages/codeChallenge.vue'
import communityPage from '../pages/communityPage.vue'
import contactPage from '../pages/contactPage.vue'
import devMatrix from '../pages/devMatrix.vue'
import devPodcast from '../pages/devPodcast.vue'
       

const routes = [
  { path: '/',          component: HomePage },
  { path: '/about',     component: AboutPage },
  { path: '/code-challenge', component: codeChallenge },
  { path: '/community', component: communityPage },
  { path: '/contact', component: contactPage },
  { path: '/dev-matrix', component: devMatrix },
  { path: '/dev-podcast', component: devPodcast },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router