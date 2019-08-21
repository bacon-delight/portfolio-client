<template>
	<div class="container">
		<Header />
		<About />
		<Experience />

		<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
		<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
		<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
		<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
		<p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
	</div>
</template>

<script>
	import Header from '@/components/homepage/Header.vue';
	import About from '@/components/homepage/About.vue';
	import Experience from '@/components/homepage/Experience.vue';

	export default {
		components: {
			Header,
			About,
			Experience
		},
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
	}
</style>
