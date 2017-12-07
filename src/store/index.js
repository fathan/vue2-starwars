import Vue from 'vue'
import Vuex from 'vuex'

import films from './modules/films'
import people from './modules/people'
import planets from './modules/planets'
import random from './modules/random'
import species from './modules/species'
import starships from './modules/starships'
import vehicles from './modules/vehicles'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		films,
		people,
		planets,
		random,
		species,
		starships,
		vehicles
	}
})