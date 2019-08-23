<template>
	<div class="experience">
		<Navigation />
		<Landing />
		<div class="section-details">
			<Certification />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Certification from '@/components/certifications/Certifications.vue';
	import Landing from '@/components/certifications/Landing.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Certifications',
		components: {
			Navigation,
			Certification,
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
		mounted () {
			this.$nextTick(() => {
				this.$nuxt.$loading.start();
				setTimeout(() => this.$nuxt.$loading.finish(), 500);
			})
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