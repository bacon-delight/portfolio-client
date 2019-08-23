<template>
	<div class="about">
		<div class="about__header">About Me</div>
		<div class="about__grid">
			<a-row type="flex">
				<a-col :xs="24" :md="16" class="about__grid--text">
					{{ this.$store.getters.getAboutMe }}
					<p class="about__grid--text__location"><span class="about__grid--text__location--title">Current Location:</span> {{ this.$store.getters.getCurrentLocation }}</p>
				</a-col>
				<a-col :xs="24" :md="8" class="about__grid--image">
					<img class="profile-picture" src="../../assets/dp.png" alt="Profile Picture">
				</a-col>
			</a-row>
		</div>
		<div class="about__map">
			<iframe class="about__map--frame" frameborder="0" :src="mapSource"></iframe>
		</div>
	</div>
</template>

<script>
	import { mapsKey } from '@/static/mapsKey.secret.js';

	export default {
		name: 'About',
		data() {
			return {
				mapSource: ''
			}
		},
		mounted() {
			this.mapSource = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbU60yXAWrjsR4E9-UejD3_g&key=' + mapsKey;
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		background: #f5f5f5;
		widows: 100vw;
		margin-top: -25vh;
		margin-bottom: 0;
		padding: 9rem 0 0 0;

		&__header {
			font-size: 1.5rem;
			text-transform: uppercase;
			font-weight: 900;
			letter-spacing: .3rem;
			background-image: linear-gradient(to right, #C33764, #1D2671);
			-webkit-background-clip: text;
			color: transparent;
			padding: 2rem;
			cursor: default;
			text-shadow: .5rem 1rem 2rem rgba(#000, .6);
		}

		&__grid {
			padding: 2rem;

			&--text {
				font-size: 1.2rem;
				text-align: justify;
				padding-right: 1.5rem;
				line-height: 2.5rem;

				&__location {
					margin-top: 1.2rem;

					&--title {
						font-weight: 800;
					}
				}
			}

			&--image {
				text-align: center;
			}
		}

		&__map {
			display: block;
			padding: 0;
			margin: 0;

			&--frame {
				width: 100%;
				height: 40vh;
			}
		}
	}

	.profile-picture {
		border-radius: 50%;
		transition: all .7s;
		
		&:hover, &:active {
			box-shadow: .5rem 1rem 2rem rgba(#000, .6);
		}
	}
</style>