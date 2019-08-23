<template>
	<div class="experience">
		<Navigation />
		<Landing />
		<div class="section-details">
			<Project />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Project from '@/components/projects/Projects.vue';
	import Landing from '@/components/projects/Landing.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Projects',
		components: {
			Navigation,
			Project,
			Landing,
			Base
		},
		head() {
			return {
				title: 'Dipanjan De | Certifications',
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Certifications'
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