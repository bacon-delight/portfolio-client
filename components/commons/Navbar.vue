<template>
	<div class="navbar">
		<a class="navbar__item" v-for="item in navList" href="">{{item.title}}</a>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				navList: [
					{
						title: 'Alma Mater',
						link: '/education'
					},
					{
						title: '',
						link: '/projects'
					},
					{
						title: 'Certifications',
						link: '/certifications'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navbar {
		display: block;
		width: 100vw;
		background: tomato;
		text-align: center;

		&__item {
			display: inline-block;
			font-size: 1.5rem;
			margin: 0 3rem;
		}
	}
</style>