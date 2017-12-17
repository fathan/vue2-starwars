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
		      <th scope="col">ACTION</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(f, index) in films">
		      <th scope="row">{{ index+1 }}</th>
		      <td>{{ f.title }}</td>
		      <td>{{ f.director }}</td>
		      <td>{{ f.producer }}</td>
		      <td>{{ f.release_date }}</td>
		      <td><b-button :pressed="false" variant="success" v-b-modal.modal-films @click="showModalFilm(f)">Detail</b-button></td>
		    </tr>
		  </tbody>
		</table>
		<b-modal id="modal-films" title="Bootstrap-Vue">
	    <pre>{{ filmDetail }}</pre>
	  </b-modal>
	</div>
</template>

<script>
	export default {
		name: 'Films',
		computed: {
			films () {
				return this.$store.getters.allFilms
			},
			filmDetail () {
				return this.$store.getters.filmDetail
			}
		},
		methods: {
			showModalFilm (data) {
				this.$store.dispatch('showFilmDetail', data)
			}
		},
		created () {
			this.$store.dispatch('getAllFilms')
		}
	}
</script>
