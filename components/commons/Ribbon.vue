<template>
	<div class="ribbon">
		<div class="ribbon__title">
			<nuxt-link to="/" class="ribbon__title--name">
				Dipanjan De
			</nuxt-link>
			<div class="ribbon__title--description">
				AI Researcher & Full Stack Developer
			</div>
		</div>
		<div class="ribbon__header">Experiences</div>
	</div>
</template>

<script>
	export default {
		name: 'Ribbon'
	}
</script>

<style lang="scss" scoped>
	.ribbon {
		width: 100vw;
		display: block;
		background-image: linear-gradient(
		    to left bottom,
		    rgba(#000046, 0.8),
		    rgba(#1CB5E0, 0.8)),
			url('../../assets/backgrounds/img02.jpg');
		background-size: cover;
		background-position: top;
		position: relative;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
		padding: 1rem 1rem 3rem 1rem;
		color: #ddd;

		&__title {
			display: block;
			
			&--name {
				font-size: 1.5rem;
				text-transform: uppercase;
				letter-spacing: .4rem;
				font-weight: 800;
				transition: all 1.2s;
				cursor: pointer;
				text-decoration: none;
				color: #ddd;
				padding-bottom: .5rem;
				border-bottom: 1px solid #fff;

				&:hover {
					font-weight: 800;
					color: tomato;
				}
			}

			&--description {
				margin-top: 2rem;
				font-size: .9rem;
				text-transform: uppercase;
				letter-spacing: .2rem;
				color: #ddd;
			}
		}

		&__header {
			display: block;
			text-align: right;
			font-size: 2.5rem;
			font-weight: 800;
			letter-spacing: .8rem;
			text-transform: uppercase;
			margin-top: 3rem;
			transform: skewY(3deg);
		}
	}
</style>