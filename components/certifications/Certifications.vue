<template>
	<div class="section-certifications">
		<div class="section-certifications__body">
			<a-row type="flex" v-for="certification in certifications" :key="certification.url">
				<a-col :xs="24" :md="6" class="section-certifications__body--logo">
					<img v-bind:src="certification.logo" :alt="certification.authority" class="company-logo">
				</a-col>
				<a-col :xs="24" :md="18" class="section-certifications__body--details">
					<p class="section-certifications__body--details__title">{{ certification.title }}</p>
					<p class="section-certifications__body--details__authority">{{ certification.authority }}</p>
					<p class="section-certifications__body--details__date">{{ certification.certitied }}</p>
					<p v-if="certification.credential" class="section-certifications__body--details__id">Credential ID: {{ certification.credential }}</p>
					<a class="section-certifications__body--details__link" :href="certification.url" target="_blank">Verify Credentials</a>
				</a-col>
			</a-row>
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
		name: 'Certifications',
		data() {
			return {
				certifications: [
					{
						title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
						authority: 'deeplearning.ai | Coursera',
						certitied: 'August 2019',
						credential: 'FJDTE4HDGLPA',
						logo: dlLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/FJDTE4HDGLPA'
					},
					{
						title: 'Aerial Robotics',
						authority: 'University of Pennsylvania | Coursera',
						certitied: 'June 2019',
						credential: 'DUCHUL7H3SR4',
						logo: pennLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/DUCHUL7H3SR4'
					},
					{
						title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
						authority: 'deeplearning.ai | Coursera',
						certitied: 'June 2019',
						credential: 'STJV79JHXGV5',
						logo: dlLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/STJV79JHXGV5'
					},
					{
						title: 'Open Source Software Development Methods',
						authority: 'The Linux Foundation | Coursera',
						certitied: 'June 2019',
						credential: 'AGAX5ZA9K49Y',
						logo: linuxLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/AGAX5ZA9K49Y'
					},
					{
						title: 'Machine Learning',
						authority: 'Stanford University | Coursera',
						certitied: 'May 2018',
						credential: 'LP24CHQQKNFZ',
						logo: stanfordLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/LP24CHQQKNFZ'
					},
					{
						title: 'Neural Networks and Deep Learning',
						authority: 'deeplearning.ai | Coursera',
						certitied: 'April 2018',
						credential: 'RNCF6U29KT64',
						logo: dlLogo,
						url: 'https://www.coursera.org/account/accomplishments/verify/RNCF6U29KT64'
					},
					{
						title: 'Big Data Foundations',
						authority: 'IBM',
						certitied: 'March 2016',
						logo: ibmLogo,
						url: 'https://www.youracclaim.com/badges/1a9664dd-8232-40fe-b482-d5abfac4aad1/linked_in_profile'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-certifications {
		width: 100vw;
		position: relative;

		&__body {
			padding: 3rem 1rem;
			
			&--logo {
				text-align: center;
				padding: 1.2rem 1rem;
			}

			&--details {
				padding: 1rem;

				&__title {
					color: #000;
					text-transform: uppercase;
					font-weight: 600;
					letter-spacing: .25rem;
					font-size: 1.2rem;
					margin: 0;
				}

				&__authority {
					text-transform: uppercase;
					font-weight: 300;
					letter-spacing: .2rem;
					font-size: .85rem;
					margin: .3rem 0;
				}

				&__date {
					margin-bottom: .6rem;
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