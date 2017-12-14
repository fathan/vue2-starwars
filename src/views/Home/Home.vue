<template>
	<div>
		<img :src="image">
	</div>
</template>

<script>

export default {
	name: 'Home',
	data () {
		return {
			image: 'https://graphcms.com/assets/cms/OG_Twitter-Blog-Swapi.png'
		}
	}
}
</script>

<style scoped>
	img{
		width: 100%;
	}
</style>
