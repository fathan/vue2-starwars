<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		  <a class="navbar-brand" href="#">SWAPI</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-starwars" aria-controls="navbar-starwars" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbar-starwars">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		        <router-link class="nav-link" to="/">HOME</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/films">FILMS</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/people">PEOPLE</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/planets">PLANETS</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/species">SPECIES</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/starships">STARSHIPS</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/vehicles">VEHICLES</router-link>
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