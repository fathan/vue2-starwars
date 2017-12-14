<template>
	<div>
		<h4><strong>FILMS</strong></h4><hr>
		<table class="table table-bordered table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm table-striped">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">NO</th>
		      <th scope="col">TITLE</th>
		      <th scope="col">DIRECTOR</th>
		      <th scope="col">PRODUCER</th>
		      <th scope="col">RELEASE DATE</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(f, index) in films">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ f.title }}</td>
		      <td>{{ f.director }}</td>
		      <td>{{ f.producer }}</td>
		      <td>{{ f.release_date }}</td>
		    </tr>
		  </tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'Films',
		computed: {
			films () {
				return this.$store.getters.allFilms
			}
		},
		created () {
			this.$store.dispatch('getAllFilms')
		}
	}
</script>
