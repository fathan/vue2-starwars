import axios from 'axios'
import { ENV } from './config'

const api = axios.create({
  baseURL: ENV.API_URL
})
const state = {
	films: []
}
const getters = {
	allFilms: state => {
    return state.films.sort((a, b) => {
      return a['id'] < b['id']
    })
  }
}

const actions = {
	getActAllFilms () {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('films', options)
      .then(
        response => {
          resolve(response)
          state.films = response.results
        },
        error => {
          reject(error)
        }
      )
		})
	}
}
const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}