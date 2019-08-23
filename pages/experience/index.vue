<template>
	<div class="experience">
		<Navigation />
		<Landing />
		<div class="section-details">
			<Experience />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Experience from '@/components/experience/Experience.vue';
	import Landing from '@/components/experience/Landing.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Experiences',
		components: {
			Navigation,
			Experience,
			Landing,
			Base
		},
		mounted () {
			this.$nextTick(() => {
				this.$nuxt.$loading.start();
				setTimeout(() => this.$nuxt.$loading.finish(), 500);
			})
		},
		head() {
			return {
				title: 'Dipanjan De | Experiences',
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Experiences'
					}
				]
			}
		},
	}
</script>

<style lang="scss" scoped>

	.experience {
		padding: 0;
		margin: 0;
	}

	.section-details {
		display: block;
		position: relative;
	}

</style>