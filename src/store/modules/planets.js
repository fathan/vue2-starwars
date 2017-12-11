import axios from 'axios'
import { ENV } from './config'
import * as mutationType from '../mutation_types'

const api = axios.create({
  baseURL: ENV.API_URL
})

const state = {
  count: '',
  next: '',
  previous: '',  
	planets: []
}

const getters = {
  countPlanet: state => {
    return state.count
  },
  nextPlanet: state => {
    return state.next
  },
  previousPlanet: state => {
    return state.previous
  },
	allPlanets: state => {
    return state.planets
  }
}

const mutations = {
  [mutationType.COUNT_PLANETS] (state, count) {
    state.count = count
  },
  [mutationType.NEXT_PLANETS] (state, next) {
    state.next = next
  },
  [mutationType.PREVIOUS_PLANETS] (state, previous) {
    state.previous = previous
  },
  [mutationType.SHOW_ALL_PLANETS] (state, planets) {
    state.planets = planets
  }
}

const actions = {
	getAllPlanets ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('planets', options)
      .then(
        response => {
        	let planets = response.data
          commit(mutationType.COUNT_PLANETS, planets.count)
          commit(mutationType.NEXT_PLANETS, planets.next)
          commit(mutationType.PREVIOUS_PLANETS, planets.previous)
          commit(mutationType.SHOW_ALL_PLANETS, planets.results)
        },
        error => {
          reject(error)
        }
      )
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}