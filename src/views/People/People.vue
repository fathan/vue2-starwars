<template>
	<div>
		Total count people data is a 
		<span class="badge badge-pill badge-danger">
			{{ countPeople }}
		</span>
		<br>
		<br>
		<table class="table table-bordered table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-striped">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">NO</th>
		      <th scope="col">NAME</th>
		      <th scope="col">HEIGHT</th>
		      <th scope="col">MASS</th>
		      <th scope="col">HAIR COLOR</th>
		      <th scope="col">SKIN COLOR</th>
		      <th scope="col">EYE COLOR</th>
		      <th scope="col">GENDER</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(p, index) in peoples">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ p.name }}</td>
		      <td>{{ p.height }}</td>
		      <td>{{ p.mass }}</td>
		      <td>{{ p.hair_color }}</td>
		      <td>{{ p.skin_color }}</td>
		      <td>{{ p.eye_color }}</td>
		      <td>{{ p.gender }}</td>
		    </tr>
		  </tbody>
		</table>
		<div class="pull-left">
			<button type="button" @click="pagination(peoples)" class="btn btn-primary">Prev</button>
		</div>
		<div class="pull-right">
			<button type="button" @click="pagination(peoples)" class="btn btn-primary">Next</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'People',
		computed: {
			countPeople () {
				return this.$store.getters.countPeople
			},
			nextPeople () {
				return this.$store.getters.nextPeople
			},
			previousPeople () {
				return this.$store.getters.previousPeople
			},
			peoples () {
				return this.$store.getters.allPeoples
			}
		},
		created () {
			this.$store.dispatch('getAllPeoples')
		}
	}
</script>