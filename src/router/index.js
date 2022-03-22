import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import students from '../views/Students.vue'
import Teachers from '../views/Teachers.vue'
import Episodes from '../views/Episodes.vue'
import Rating from '../views/Rating.vue'
import Dashboard from '../views/Dashboard.vue'
import ContactUs from '../views/ContactUs.vue'
import Supervisors from '../views/Supervisors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'students',
    component: students
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: Episodes
  },
  {
    path: '/rating',
    name: 'rating',
    component: Rating
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/supervisors',
    name: 'supervisors',
    component: Supervisors
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
