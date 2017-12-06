import axios from 'axios'
import { ENV } from './config'

const api = axios.create({
  baseURL: ENV.API_URL
})
const state = {}
const getters = {}
const actions = {}
const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations
}