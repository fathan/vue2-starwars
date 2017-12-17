import axios from 'axios'
import { ENV } from './config'
import * as mutationType from '../mutation_types'

const api = axios.create({
  baseURL: ENV.API_URL
})

const state = {
	films: [],
  filmDetail: {}
}

const getters = {
	allFilms: state => {
    return state.films
  },
  filmDetail: state => {
    return state.filmDetail
  }
}

const mutations = {
  [mutationType.SHOW_ALL_FILMS] (state, films) {
    state.films = films
  },
  [mutationType.SHOW_FILM_DETAIL] (state, filmDetail) {
    state.filmDetail = filmDetail
  }
}

const actions = {
  // ACTIONS GLOBAL
  showFilmDetail ({commit}, data) {
    commit(mutationType.SHOW_FILM_DETAIL, data)
  },
  // ACTIONS API DATA
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

export default {
	state,
	getters,
	actions,
	mutations
}