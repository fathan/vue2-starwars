<template>
	<div>
		<div class="list-group">
		  <router-link class="nav-item" to="/">Home</router-link>
			<router-link class="nav-item" to="/films">Films</router-link>
			<router-link class="nav-item" to="/people">People</router-link>
			<router-link class="nav-item" to="/planets">Planets</router-link>
			<router-link class="nav-item" to="/species">Species</router-link>
			<router-link class="nav-item" to="/starships">Starships</router-link>
			<router-link class="nav-item" to="/vehicles">Vehicles</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppSidebar'
	}
</script>