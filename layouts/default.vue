<template>
	<div class="base-layout">
		<nuxt />
	</div>
</template>

<style lang="scss">
	
	@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html,
	body {
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;

		//Hide Scroll
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			widows: 0 !important;
		}
	}

	.base-layout {
		height: 100vh;
		widows: 100vw;
	}
</style>