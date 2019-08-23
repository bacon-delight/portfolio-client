<template>
	<div class="experience">
		<Navigation />
		<div class="section-header">
			<div class="background-video">
				<video class="background-video__content" autoplay muted loop>
				    <source src="../../assets/videos/nebula.mp4" type="video/mp4">
				    <source src="../../assets/videos/nebula.webm" type="video/webm">
				    Your browser doesn't support video!
				</video>
			</div>
			<div class="section-header__logo">
				<nuxt-link to="/" class="section-header__logo--text">Dipanjan De</nuxt-link>
			</div>
			<div class="section-header__title">
				<div class="section-header__title--main">Experiences</div>
				<div class="section-header__title--sub">
					<p>It's all about the journey and commitment towards reaching the destination. One may not be privilaged enough to command over the direction of the wind, but sure can be smart enough to adjust the sails towards the destination.</p>
				</div>
			</div>
		</div>
		<div class="section-details">
			<Experience />
		</div>
		<Base />
	</div>
</template>

<script>
	import Navigation from '@/components/commons/Navigation.vue';
	import Experience from '@/components/experience/Experience.vue';
	import Base from '@/components/commons/Base.vue';

	export default {
		name: 'Experiences',
		components: {
			Navigation,
			Experience,
			Base
		}
	}
</script>

<style lang="scss" scoped>

	@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

	.experience {
		padding: 0;
		margin: 0;
	}
	
	.section-header {
		position: relative;
		height: 100vh;
		width: 100vw;
		background-image: linear-gradient(
		    to left bottom,
		    rgba(#000046, 0.55),
		    rgba(#1CB5E0, 0.55));

		&__logo {
			padding: 2.9rem 1.8rem;

			&--text {
				color: #ddd;
				text-transform: uppercase;
				letter-spacing: .3rem;
				padding: .5rem .8rem;
				border: 1px solid #fff;
				transition: all 1.2s;

				&:hover {
					color: tomato;
				}
			}
		}

		&__title {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #eee;

			&--main {
				display: block;
				text-align: center;
				text-transform: uppercase;
				letter-spacing: .8rem;
				font-size: 2rem;
			}

			&--sub {
				font-family: 'Dancing Script', cursive;
				margin-top: 2rem;
				letter-spacing: .3rem;
				text-align: justify;
				font-size: .9rem;
				line-height: 1.8rem;
			}
		}
	}

	.section-details {
		display: block;
		position: relative;
	}

	.background-video {
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
	    width: 100%;
	    z-index: -1;
	    opacity: .8;
	    overflow: hidden;

	    &__content {
	        height: 100%;
	        width: 100%;
	        object-fit: cover;
	    }
	}
</style>