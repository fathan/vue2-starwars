<template>
	<div>
		<div class="row">
		  <div class="col-md-12">
		    <div class="pull-left">
		      <h4><strong>STARSHIPS</strong></h4>
		    </div>
		    <div class="pull-right">
					Total count starships data is a
					<span class="badge badge-pill badge-danger">
						{{ countStarship }}
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
		      <th scope="col">MODEL</th>
		      <th scope="col">MANUFACTURER</th>
		      <th scope="col">COST IN CREDITS</th>
		      <th scope="col">CONSUMABLES</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(s, index) in starships">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ s.name }}</td>
		      <td>{{ s.model }}</td>
		      <td>{{ s.manufacturer }}</td>
		      <td>{{ s.cost_in_credits }}</td>
		      <td>{{ s.consumables }}</td>
		    </tr>
		  </tbody>
		</table>
		<div v-if="previousStarship !== null" class="pull-left">
			<button type="button" @click="pagination(previousStarship)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(nextStarship)" class="btn btn-primary">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Starships',
		methods: {
			pagination (data) {
				this.$store.dispatch('getStarshipsByUrl', data)
			}
		},
		computed: {
			countStarship () {
				return this.$store.getters.countStarship
			},
			nextStarship () {
				return this.$store.getters.nextStarship
			},
			previousStarship () {
				return this.$store.getters.previousStarship
			},
			starships () {
				return this.$store.getters.allStarships
			}
		},
		created () {
			this.$store.dispatch('getAllStarships')
		}
	}
</script>
