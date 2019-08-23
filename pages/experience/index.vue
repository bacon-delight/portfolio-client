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