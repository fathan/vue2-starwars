<template>
	<div>
		<table class="table table-bordered table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-striped">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">NO</th>
		      <th scope="col">NAME</th>
		      <th scope="col">MODEL</th>
		      <th scope="col">MANUFACTURER</th>
		      <th scope="col">COST IN CREDITS</th>
		      <th scope="col">VEHICLE CLASS</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(v, index) in vehicles">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ v.name }}</td>
		      <td>{{ v.model }}</td>
		      <td>{{ v.manufacturer }}</td>
		      <td>{{ v.cost_in_credits }}</td>
		      <td>{{ v.vehicle_class }}</td>
		    </tr>
		  </tbody>
		</table>
		<div class="pull-left">
			<button type="button" @click="pagination(vehicles)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(vehicles)" class="btn btn-primary">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vehicles',
		computed: {
			countVehicle () {
				return this.$store.getters.countVehicle
			},
			nextVehicle () {
				return this.$store.getters.nextVehicle
			},
			previousVehicle () {
				return this.$store.getters.previousVehicle
			},
			vehicles () {
				return this.$store.getters.allVehicles
			}
		},
		created () {
			this.$store.dispatch('getAllVehicles')
		}
	}
</script>