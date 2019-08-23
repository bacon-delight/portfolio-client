<template>
	<div class="section-projects">
		<div class="section-projects__body">
			<div class="section-projects__body--details" v-for="project in projects">
				<p class="section-projects__body--details__title">{{ project.title }}</p>
				<p class="section-projects__body--details__description">{{ project.description }}</p>
				<p class="section-projects__body--details__tags"><span style="font-weight: 800;">Tags:</span> {{ project.tags }}</p>
				<a class="section-projects__body--details__link" v-if="project.url" :href="project.url" target="_blank">View Project</a>
			</div>
		</div>
	</div>
</template>

<script>
	const dlLogo = require('../../assets/logos/deeplearn.png');
	const stanfordLogo = require('../../assets/logos/stanford.png');
	const linuxLogo = require('../../assets/logos/linux.png');
	const pennLogo = require('../../assets/logos/penn.png');
	const ibmLogo = require('../../assets/logos/ibm.png');

	export default {
		name: 'Project',
		data() {
			return {
				projects: [
					{
						title: 'Bilonz',
						description: 'AI Embedded Cognitive Cloud Platform for Smart IoT Automation',
						tags: 'Machine Learning, Nature Inspired Computing, Arduino, Design, Development, Deployment, Cloud, REST APIs',
						url: 'https://bilonz.com'
					},
					{
						title: 'Air Quality Analysis',
						description: 'Time series analysis of air quality and study to improve quality of breathable air',
						tags: 'Machine Learning, Data Analysis, Data Acquisition and Cleansing',
					},
					{
						title: 'Overwatch',
						description: 'IoT Cloud with real-time data streaming and control of home and industrial appliances',
						tags: 'Cloud, Arduino, Databases, REST APIs, Design, Development, Deployment',
						url: 'https://overwatch.pulseflare.com/'
					},
					{
						title: 'Crates',
						description: 'File sharing and storage platform with ability to share files in groups and invite',
						tags: 'Cloud, Arduino, Databases, Design, Development, Deployment',
						url: 'https://crates.pulseflare.com/'
					},
					{
						title: 'Freelancing - Hotel Booking Site',
						description: 'Booking site for a hotel in Vellore near Vellore Institute of Technology',
						tags: 'UI/UX, Cloud, Web Development, Full Stack, Responsive',
					},
					{
						title: '3D Database Framework',
						description: 'A framework for visualizing databases in three spatial dimensions',
						tags: 'Cloud, Arduino, Databases, REST APIs, Design, Development, Deployment',
						url: 'https://ijarcce.com/upload/2018/march-18/IJARCCE%2017.pdf'
					},
					{
						title: 'Flight Operations Support System',
						description: 'Prototype aimed at reducing issues inflicted by increased traffic in an airspace',
						tags: 'Cloud, Arduino, Databases, Design, Development, Deployment',
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-projects {
		width: 100vw;
		position: relative;

		&__body {
			padding: 3rem 1rem;
			
			&--details {
				padding: 1.5rem 1rem;

				&__title {
					color: #000;
					font-size: 1.5rem;
					letter-spacing: .4rem;
					text-transform: uppercase;
					margin-bottom: .5rem;
				}

				&__description {
					letter-spacing: .15rem;
				}

				&__link {
					&:link,
					&:visited {
					    display: inline-block;
					    font-weight: 300;
					    color: #1CB5E0;
					    margin-left: -1.2rem;
					    padding: .6rem 1.2rem;
					    text-decoration: none;
					    text-transform: uppercase;
					    letter-spacing: .25rem;
					    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #1CB5E0 50%);
					    background-size: 250%;
					    transition: all .4s;
					}
					
					&:hover,
					&:active {
						margin: 0;
					    background-position: 100%;
					    color: #fff;
					}
				}
			}
		}
	}

	.company-logo {
		width: 120px;
		height: 120px;
	}
</style>