<template>
	<div class="experience">
		<Navigation />
		<Landing />
		<div class="section-details">
			<Education />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Education from '@/components/education/Education.vue';
	import Landing from '@/components/education/Landing.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Experiences',
		components: {
			Navigation,
			Education,
			Landing,
			Base
		}
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