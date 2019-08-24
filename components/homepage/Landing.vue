<template>
	<div class="header">
		<div class="header__text-container">
			<div class="header__text-container--main">
				Hi, I'm <span class="header__text-container--main__name">Dipanjan</span>!
			</div>
			<div class="header__text-container--sub">
				AI & ML Researcher | Full Stack Developer
			</div>
			<div class="header__text-container--links">
				<div class="links">
					<a target="_blank" href="https://github.com/bacon-delight" class="links__item"><a-icon type="github"/></a>
					<a target="_blank" href="https://linkedin.com/in/dipanjan131/" class="links__item"><a-icon type="linkedin"/></a>
					<a target="_blank" href="https://www.instagram.com/bacon_delight/" class="links__item"><a-icon type="instagram"/></a>
					<a target="_blank" href="https://medium.com/@dipanjan131" class="links__item"><a-icon type="medium"/></a>
				</div>
				<div class="header__text-container--download">
					<a class="header__text-container--download__link" target="_blank" href="https://drive.google.com/file/d/1ckS-uLeD37rPJMhrtZb8CiJUUrpL8OpW/view?usp=sharing">Download CV</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Landing',
		mounted () {
			this.$nextTick(() => {
				this.$nuxt.$loading.start();
				setTimeout(() => this.$nuxt.$loading.finish(), 500);
			})
		}
	}
</script>

<style lang="scss" scoped>
	
	@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

	.header {
		width: 100vw;
		height: 100vh;
		background-image: linear-gradient(
		    to left bottom,
		    rgba(#000046, 0.8),
		    rgba(#1CB5E0, 0.8)),
			url('../../assets/backgrounds/img02.jpg');
		background-size: cover;
		background-position: top;
		position: relative;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);

		&__text-container {
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			font-family: 'Raleway', sans-serif;
			color: #ddd;
			cursor: default;

			&--main {
				display: block;
				letter-spacing: .3rem;
				font-size: 2rem;

				&__name {
					font-weight: 800;
					transition: all 1.2s;
				}

				&__name:hover {
					font-weight: 800;
					color: tomato;
				}
			}

			&--sub {
				display: block;
				font-size: 1.2rem;
				margin: 2rem 0 3rem 0;
				padding: .7rem 2rem;
				border: 1px solid #eee;
				letter-spacing: .2rem;
				text-transform: uppercase;
			}

			&--download {
				margin-top: 1rem;
				letter-spacing: .3rem;
				text-transform: uppercase;

				&__link {
					text-decoration: none;
					color: #fff;

					&:link, &:visited {
						background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
						background-size: 220%;
						transition: all .4s;
						padding: .4rem 1rem;
					}
					&:hover, &:active {
						color: #000046;
						background-position: 100%;
					}
				}
			}
		}
	}

	.links {
		font-size: 2rem;

		&__item {
			color: tomato;
			margin: 0 1.4rem;
			transition: all .9s;
		}

		&__item:hover {
			color: #ddd;
		}
	}
</style>