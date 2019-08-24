<template>
	<div class="skills">
		<div class="background-video">
			<video class="background-video__content" autoplay muted loop>
			    <source src="../../assets/videos/ink.mp4" type="video/mp4">
			    <source src="../../assets/videos/ink.webm" type="video/webm">
			    Your browser doesn't support video!
			</video>
		</div>
		<div class="skills__header">Skills</div>
		<div class="skills__details">
			<a-row type="flex">
				<a-col :xs="24" :sm="12">
					<div class="skills__details--item" v-for="skill in skillsLeft">
						<div class="skills__details--item__title">{{ skill.context }}</div>
						<ul class="skills__details--item__specs">
							<li class="skills__details--item__specs--item" v-for="item in skill.specializations">{{ item }}</li>
						</ul>
					</div>
				</a-col>
				<a-col :xs="24" :sm="12">
					<div class="skills__details--item" v-for="skill in skillsRight">
						<div class="skills__details--item__title">{{ skill.context }}</div>
						<ul class="skills__details--item__specs">
							<li class="skills__details--item__specs--item" v-for="item in skill.specializations">{{ item }}</li>
						</ul>
					</div>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Skills',
		data() {
			return {
				skillsLeft: [
					{
						context: 'Machine Learning',
						specializations: ['TensorFlow', 'PyTorch', 'Keras', 'CNNs', 'Pooling / Feature Extraction', 'Data Analysis']
					},
					{
						context: 'UI / UX',
						specializations: ['Vue', 'Nuxt', 'Quasar', 'Ant Design', 'Vuetify', 'React', 'Sass / SCSS']
					},
				],
				skillsRight: [
					{
						context: 'Server Side',
						specializations: ['Flask / Django', 'Node', 'GraphQL', 'Laravel']
					},
					{
						context: 'Databases',
						specializations: ['MongoDB / CouchDB', 'Cassandra / Redis', 'Neo4j', 'Cockroach', 'MySQL / PostgreSQL']
					},
					{
						context: 'Internet of Things',
						specializations: ['Arduino / Raspberry Pi', 'Embedded C', 'Lua']
					},
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.skills {
		position: relative;
		padding: 3rem 0rem 30vh 0rem;
		background-image: linear-gradient(
		    to right bottom,
		    rgba(#c31432, 0.2),
		    rgba(#240b36, 0.2));

		&__header {
			font-size: 2.5rem;
			text-transform: uppercase;
			font-weight: 900;
			letter-spacing: .5rem;
			background-image: linear-gradient(to right, #2BC0E4, #EAECC6);
			-webkit-background-clip: text;
			color: transparent;
			padding: 2rem;
			cursor: default;
			text-shadow: .5rem 1rem 2rem rgba(#fff, .6);
		}

		&__details {
			padding: 2rem;
			color: #fff;

			&--item {
				margin-bottom: 3rem;

				&__title {
					text-transform: uppercase;
					font-size: 1.1rem;
					letter-spacing: .3rem;
				}

				&__specs {
					margin: 1rem 0;

					&--item {
						margin: .8rem 0 .8rem 1rem;
						letter-spacing: .15rem;
					}
				}
			}
		}
	}
</style>