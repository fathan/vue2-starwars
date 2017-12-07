<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		  <a class="navbar-brand" href="#">STARWARS API WITH VUE.JS + VUEX</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-starwars" aria-controls="navbar-starwars" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbar-starwars">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		        <router-link class="nav-link" to="/">Home</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/films">Films</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/people">People</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/planets">Planets</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/species">Species</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/starships">Starships</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/vehicles">Vehicles</router-link>
		      </li>
		    </ul>
		  </div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'AppHeader'
	}
</script>

<style scoped>
	.navbar-light .navbar-brand {
	  color: #FFFFFF;
	}

	.navbar-light .navbar-nav .nav-link {
	  color: rgba(255, 255, 255, 0.7);
	}

	.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
		color: rgb(255, 255, 255);
	}
</style>