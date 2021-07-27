import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/RegistrationNew'
import Introduction from '../views/IntroductionNew.vue'
import Galery from '../views/Galery.vue'
import Contact from '../views/Contact.vue'
import Attendees from '../views/Attendees.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/rspv',
        name: 'Registration',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Registration
    },
    {
        path:'/intro',
        name:'Introduction',
        component: Introduction
    },
    {
        path:'/galery',
        name:'Galery',
        component:Galery
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact
    },
    {
        path:'/attendees',
        name:'Attendees',
        component:Attendees
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        document.getElementById('app').scrollIntoView();
      },
    routes
    
      
})

export default router
