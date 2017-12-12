<template>
	<div>
		Total count starships data is a 
		<span class="badge badge-pill badge-danger">
			{{ countStarship }}
		</span>
		<br>
		<br>
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
		<!-- <div class="pull-left">
			<button type="button" @click="pagination(starships)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(starships)" class="btn btn-primary">Next</button>
		</div> -->
	</div>
</template>

<script>
	export default {
		name: 'Starships',
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