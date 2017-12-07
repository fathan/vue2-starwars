import Vue from 'vue'
import Router from 'vue-router'

import IndexFilms from '@/views/Films/Index'
import Films from '@/views/Films/Films'
import FilmsDetail from '@/views/Films/FilmDetail'

import IndexPeople from '@/views/People/Index'
import People from '@/views/People/People'
import PeopleDetail from '@/views/People/PeopleDetail'

import IndexPlanets from '@/views/Planets/Index'
import Planets from '@/views/Planets/Planets'
import PlanetDetail from '@/views/Planets/PlanetDetail'

import IndexSpecies from '@/views/Species/Index'
import Species from '@/views/Species/Species'
import SpeciesDetail from '@/views/Species/SpeciesDetail'

import IndexStarships from '@/views/Starships/Index'
import Starships from '@/views/Starships/Starships'
import StarshipDetail from '@/views/Starships/StarshipDetail'

import IndexVehicles from '@/views/Vehicles/Index'
import Vehicles from '@/views/Vehicles/Vehicles'
import VehicleDetail from '@/views/Vehicles/VehicleDetail'

import Home from '@/views/Home/Home'
import NotFound from '@/views/Random/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { 
      path: '*', 
      component: NotFound 
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/films',
      redirect: '/films',
      name: 'Films',
      component: IndexFilms,
      children: [
        {
          path: '/',
          name: 'Films',
          component: Films
        },
        {
          path: ':id',
          name: 'Film Detail',
          component: FilmsDetail
        }
      ]
    },
    {
      path: '/people',
      redirect: '/people',
      name: 'People',
      component: IndexPeople,
      children: [
        {
          path: '/',
          name: 'People',
          component: People
        },
        {
          path: ':id',
          name: 'People Detail',
          component: PeopleDetail
        }
      ]
    },
    {
      path: '/planets',
      redirect: '/planets',
      name: 'Planets',
      component: IndexPlanets,
      children: [
        {
          path: '/',
          name: 'Planets',
          component: Planets
        },
        {
          path: ':id',
          name: 'Planet Detail',
          component: PlanetDetail
        }
      ]
    },
    {
      path: '/species',
      redirect: '/species',
      name: 'Species',
      component: IndexSpecies,
      children: [
        {
          path: '/',
          name: 'Species',
          component: Species
        },
        {
          path: ':id',
          name: 'Species Detail',
          component: SpeciesDetail
        }
      ]
    },
    {
      path: '/starships',
      redirect: '/starships',
      name: 'Starships',
      component: IndexStarships,
      children: [
        {
          path: '/',
          name: 'Starships',
          component: Starships
        },
        {
          path: ':id',
          name: 'Starship Detail',
          component: StarshipDetail
        }
      ]
    },
    {
      path: '/vehicles',
      redirect: '/vehicles',
      name: 'Vehicles',
      component: IndexVehicles,
      children: [
        {
          path: '/',
          name: 'Vehicles',
          component: Vehicles
        },
        {
          path: ':id',
          name: 'Vehicle Detail',
          component: VehicleDetail
        }
      ]
    }
  ]
})

export default router