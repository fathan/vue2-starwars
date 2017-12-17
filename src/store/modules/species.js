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
	species: []
}

const getters = {
  countSpecies: state => {
    return state.count
  },
  nextSpecies: state => {
    return state.next
  },
  previousSpecies: state => {
    return state.previous
  },
	allSpecies: state => {
    return state.species
  }
}

const mutations = {
  [mutationType.COUNT_SPECIES] (state, count) {
    state.count = count
  },
  [mutationType.NEXT_SPECIES] (state, next) {
    state.next = next
  },
  [mutationType.PREVIOUS_SPECIES] (state, previous) {
    state.previous = previous
  },
  [mutationType.SHOW_ALL_SPECIES] (state, species) {
    state.species = species
  }
}

const actions = {
	getAllSpecies ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('species', options)
      .then(
        response => {
        	let species = response.data
          commit(mutationType.COUNT_SPECIES, species.count)
          commit(mutationType.NEXT_SPECIES, species.next)
          commit(mutationType.PREVIOUS_SPECIES, species.previous)
          commit(mutationType.SHOW_ALL_SPECIES, species.results)
        },
        error => {
          reject(error)
        }
      )
		})
	},
  getSpeciesByUrl ({commit}, data) {
    return new Promise((resolve, reject) => {
      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.get(data, options)
      .then(
        response => {
          let species = response.data
          commit(mutationType.COUNT_SPECIES, species.count)
          commit(mutationType.NEXT_SPECIES, species.next)
          commit(mutationType.PREVIOUS_SPECIES, species.previous)
          commit(mutationType.SHOW_ALL_SPECIES, species.results)
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