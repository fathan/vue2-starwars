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
	vehicles: []
}

const getters = {
  countVehicle: state => {
    return state.count
  },
  nextVehicle: state => {
    return state.next
  },
  previousVehicle: state => {
    return state.previous
  },
	allVehicles: state => {
    return state.vehicles
  }
}

const mutations = {
  [mutationType.COUNT_VEHICLE] (state, count) {
    state.count = count
  },
  [mutationType.NEXT_VEHICLE] (state, next) {
    state.next = next
  },
  [mutationType.PREVIOUS_VEHICLE] (state, previous) {
    state.previous = previous
  },
  [mutationType.SHOW_ALL_VEHICLES] (state, vehicles) {
    state.vehicles = vehicles
  }
}

const actions = {
	getAllVehicles ({commit}) {
		return new Promise((resolve, reject) => {
			let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      api.get('vehicles', options)
      .then(
        response => {
        	let vehicle = response.data
          commit(mutationType.COUNT_VEHICLE, vehicle.count)
          commit(mutationType.NEXT_VEHICLE, vehicle.next)
          commit(mutationType.PREVIOUS_VEHICLE, vehicle.previous)
          commit(mutationType.SHOW_ALL_VEHICLES, vehicle.results)
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