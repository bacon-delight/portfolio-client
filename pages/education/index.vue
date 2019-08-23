<template>
	<div class="experience">
		<Navigation />
		<Landing />
		<div class="section-details">
			<Educations />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Educations from '@/components/education/Education.vue';
	import Landing from '@/components/education/Landing.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Education',
		components: {
			Navigation,
			Educations,
			Landing,
			Base
		},
		head() {
			return {
				title: 'Dipanjan De | Alma Mater',
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Alma Mater / Education'
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