<template>
	<div>
		<div class="row">
		  <div class="col-md-12">
		    <div class="pull-left">
		      <h4><strong>SPECIES</strong></h4>
		    </div>
		    <div class="pull-right">
					Total count species data is a
					<span class="badge badge-pill badge-danger">
						{{ countSpecies }}
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
		      <th scope="col">CLASSIFICATION</th>
		      <th scope="col">DESIGNATION</th>
		      <th scope="col">AVERAGE HEIGHT</th>
		      <th scope="col">LANGUAGE</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(s, index) in species" :key="s.name">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ s.name }}</td>
		      <td>{{ s.classification }}</td>
		      <td>{{ s.designation }}</td>
		      <td>{{ s.average_height }}</td>
		      <td>{{ s.language }}</td>
		    </tr>
		  </tbody>
		</table>
		<div v-if="previousSpecies !== null" class="pull-left">
			<button type="button" @click="pagination(previousSpecies)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(nextSpecies)" class="btn btn-primary">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Species',
		methods: {
			pagination (data) {
				this.$store.dispatch('getSpeciesByUrl', data)
			}
		},
		computed: {
			countSpecies () {
				return this.$store.getters.countSpecies
			},
			nextSpecies () {
				return this.$store.getters.nextSpecies
			},
			previousSpecies () {
				return this.$store.getters.previousSpecies
			},
			species () {
				return this.$store.getters.allSpecies
			}
		},
		created () {
			this.$store.dispatch('getAllSpecies')
		}
	}
</script>
