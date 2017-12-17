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
	peoples: []
}

const getters = {
  countPeople: state => {
    return state.count
  },
  nextPeople: state => {
    return state.next
  },
  previousPeople: state => {
    return state.previous
  },
	allPeoples: state => {
    return state.peoples
  }
}

const mutations = {
  [mutationType.COUNT_PEOPLES] (state, count) {
    state.count = count
  },
  [mutationType.NEXT_PEOPLES] (state, next) {
    state.next = next
  },
  [mutationType.PREVIOUS_PEOPLES] (state, previous) {
    state.previous = previous
  },
  [mutationType.SHOW_ALL_PEOPLES] (state, peoples) {
    state.peoples = peoples
  }
}

const actions = {
	getAllPeoples ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('people', options)
      .then(
        response => {
        	let peoples = response.data
          commit(mutationType.COUNT_PEOPLES, peoples.count)
          commit(mutationType.NEXT_PEOPLES, peoples.next)
          commit(mutationType.PREVIOUS_PEOPLES, peoples.previous)
          commit(mutationType.SHOW_ALL_PEOPLES, peoples.results)
        },
        error => {
          reject(error)
        }
      )
		})
	},
  getPeopleByUrl ({commit}, data) {
    return new Promise((resolve, reject) => {
      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.get(data, options)
      .then(
        response => {
          let peoples = response.data
          commit(mutationType.COUNT_PEOPLES, peoples.count)
          commit(mutationType.NEXT_PEOPLES, peoples.next)
          commit(mutationType.PREVIOUS_PEOPLES, peoples.previous)
          commit(mutationType.SHOW_ALL_PEOPLES, peoples.results)
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