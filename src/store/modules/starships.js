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
	starships: []
}

const getters = {
  countStarship: state => {
    return state.count
  },
  nextStarship: state => {
    return state.next
  },
  previousStarship: state => {
    return state.previous
  },
	allStarships: state => {
    return state.starships
  }
}

const mutations = {
  [mutationType.COUNT_STARSHIP] (state, count) {
    state.count = count
  },
  [mutationType.NEXT_STARSHIP] (state, next) {
    state.next = next
  },
  [mutationType.PREVIOUS_STARSHIP] (state, previous) {
    state.previous = previous
  },
  [mutationType.SHOW_ALL_STARSHIPS] (state, starships) {
    state.starships = starships
  }
}

const actions = {
	getAllStarships ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('starships', options)
      .then(
        response => {
        	let starship = response.data
          commit(mutationType.COUNT_STARSHIP, starship.count)
          commit(mutationType.NEXT_STARSHIP, starship.next)
          commit(mutationType.PREVIOUS_STARSHIP, starship.previous)
          commit(mutationType.SHOW_ALL_STARSHIPS, starship.results)
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