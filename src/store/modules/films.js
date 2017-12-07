import axios from 'axios'
import { ENV } from './config'
import * as mutationType from '../mutation_types'

const api = axios.create({
  baseURL: ENV.API_URL
})

const state = {
	films: []
}

const getters = {
	allFilms: state => {
    return state.films
  }
}

const actions = {
	getAllFilms ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('films', options)
      .then(
        response => {
        	let films = response.data.results
          commit(mutationType.SHOW_ALL_FILMS, films)
        },
        error => {
          reject(error)
        }
      )
		})
	}
}

const mutations = {
  [mutationType.SHOW_ALL_FILMS] (state, films) {
    state.films = films
  }
}

export default {
	state,
	getters,
	actions,
	mutations
}