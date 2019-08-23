<template>
	<div class="footer">
		<a-row type="flex">
			<a-col :xs="24" :md="10" class="footer__left">
				<nuxt-link to="/" class="footer__left--name">Dipanjan De</nuxt-link>
				<div class="footer__left--copyright">&copy; All Rights Reserved</div>
				<p class="connections">
					<a target="_blank" href="https://github.com/bacon-delight" class="connections__link"><a-icon type="github"/></a>
					<a target="_blank" href="https://linkedin.com/in/dipanjan131/" class="connections__link"><a-icon type="linkedin"/></a>
					<a target="_blank" href="https://www.instagram.com/bacon_delight/" class="connections__link"><a-icon type="instagram"/></a>
					<a target="_blank" href="https://medium.com/@dipanjan131" class="connections__link"><a-icon type="medium"/></a>
				</p>
			</a-col>
			<a-col :xs="24" :md="14" class="footer__right">
				<div class="footer__right--details">
					<div class="footer__right--details__header">Get In Touch!</div>
					<p v-for="item in details">
						<span class="footer__right--details__title">{{ item.title }}:</span>
						<span class="footer__right--details__content">{{ item.content }}</span>
					</p>
				</div>
			</a-col>
		</a-row>
	</div>
</template>

<script>
	export default {
		name: 'Base',
		data() {
			return {
				details: [
					{
						title: 'Phone',
						content: '+91-8013758776'
					},
					{
						title: 'E-Mail',
						content: 'dipanjan131@gmail.com'
					},
					{
						title: 'Home',
						content: 'Kolkata, West Bengal, India'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

	.footer {
		display: block;
		width: 100vw;
		background-image: linear-gradient(
		    to left bottom,
		    rgba(#000428, 0.65),
		    rgba(#004e92, 0.65)),
			url('../../assets/img01.jpg');
		background-size: cover;
		background-position: center;
		margin: 0;
		color: #ddd;
		padding: 15rem 1rem 3rem 1rem;
		clip-path: polygon(0 0, 100% 25vh, 100% 100%, 0 100%);

		&__left {
			text-align: center;

			&--name {
				text-decoration: none;
				color: #ddd;
				letter-spacing: .4rem;
				text-transform: uppercase;
				border: 1px solid #fff;
				padding: .6rem 1.3rem;
				display: inline-block;
			}

			&--copyright {
				margin-top: .7rem;
				text-transform: uppercase;
				letter-spacing: .2rem;
				font-size: .5rem;
			}
		}

		&__right {
			text-align: center;
			margin-top: -.4rem;
			
			&--details {
				letter-spacing: .15rem;
				font-size: .7rem;

				&__header {
					font-size: 1.5rem;
					text-transform: uppercase;
					letter-spacing: .3rem;
					margin-bottom: 1rem;
				}

				&__title {
					font-weight: 800;
				}
			}
		}
	}

	.connections {
		font-size: 1.5rem;
		text-align: center;
		margin-top: 1.5rem;
		
		&__link {
			color: #fff;
			text-decoration: none;

			&:not(:last-child) {
				margin-right: 2rem;
			}

			:hover {
				color: tomato;
			}
		}
	}
</style>