<template>
	<div>
		<div class="list-group">
		  <router-link class="list-group-item list-group-item-action" to="/">Home</router-link>
			<router-link class="list-group-item list-group-item-action" to="/films">Films</router-link>
			<router-link class="list-group-item list-group-item-action" to="/people">People</router-link>
			<router-link class="list-group-item list-group-item-action" to="/planets">Planets</router-link>
			<router-link class="list-group-item list-group-item-action" to="/species">Species</router-link>
			<router-link class="list-group-item list-group-item-action" to="/starships">Starships</router-link>
			<router-link class="list-group-item list-group-item-action" to="/vehicles">Vehicles</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppSidebar'
	}
</script>