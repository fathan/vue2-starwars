<template>
	<div>
		<div class="row">
		  <div class="col-md-12">
		    <div class="pull-left">
		      <h4><strong>PLANETS</strong></h4>
		    </div>
		    <div class="pull-right">
					Total count planets data is a
					<span class="badge badge-pill badge-danger">
						{{ countPlanet }}
					</span>
		    </div>
		  </div>
		</div>
		<hr>
		<table class="table table-bordered table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-striped">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">NO</th>
		      <th scope="col">NAME</th>
		      <th scope="col">DIAMETER</th>
		      <th scope="col">CLIMATE</th>
		      <th scope="col">GRAVITY</th>
		      <th scope="col">TERAIN</th>
		      <th scope="col">POPULATION</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(p, index) in planets">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ p.name }}</td>
		      <td>{{ p.diameter }}</td>
		      <td>{{ p.climate }}</td>
		      <td>{{ p.gravity }}</td>
		      <td>{{ p.terrain }}</td>
		      <td>{{ p.population }}</td>
		    </tr>
		  </tbody>
		</table>
		<div v-if="previousPlanet !== null" class="pull-left">
			<button type="button" @click="pagination(previousPlanet)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(nextPlanet)" class="btn btn-primary">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Planets',
		methods: {
			pagination: function (data) {
				this.$store.dispatch('getPlanetsByUrl', data)
			}
		},
		computed: {
			countPlanet () {
				return this.$store.getters.countPlanet
			},
			nextPlanet () {
				return this.$store.getters.nextPlanet
			},
			previousPlanet () {
				return this.$store.getters.previousPlanet
			},
			planets () {
				return this.$store.getters.allPlanets
			}
		},
		created () {
			this.$store.dispatch('getAllPlanets')
		}
	}
</script>
