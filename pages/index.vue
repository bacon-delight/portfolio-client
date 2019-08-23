<template>
	<div class="container">
		<Navigation />
		<Landing />
		<About />
		<Skills />
		<Base style="margin-top: -27vh;" />
	</div>
</template>

<script>
	import Landing from '@/components/homepage/Landing.vue';
	import About from '@/components/homepage/About.vue';
	import Skills from '@/components/homepage/Skills.vue';
	import Navigation from '@/components/commons/Navigation.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		head() {
			return {
				title: 'Dipanjan De | Welcome to my Portfolio',
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'AI Researcher & Full Stack Developer'
					}
				]
			}
		},
		components: {
			Landing,
			About,
			Skills,
			Navigation,
			Base
		},
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
	}
</style>
