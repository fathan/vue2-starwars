<template>
	<div>
		Sidebar
		<ul>
			<li>
				<router-link :to="'/'">Home</router-link>
				<router-link :to="'/films'">Films</router-link>
				<router-link :to="'/people'">People</router-link>
				<router-link :to="'/planets'">Planets</router-link>
				<router-link :to="'/species'">Species</router-link>
				<router-link :to="'/starships'">Starships</router-link>
				<router-link :to="'/vehicles'">Vehicles</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar'
	}
</script>