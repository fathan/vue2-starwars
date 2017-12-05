import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/views/Films'
import Home from '@/views/Home'
import People from '@/views/People'
import Planets from '@/views/Planets'
import Species from '@/views/Species'
import Starships from '@/views/Starships'
import Vehicles from '@/views/Vehicles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    },
    {
      path: '/species',
      name: 'Species',
      component: Species
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles
    }
  ]
})
