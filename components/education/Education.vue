<template>
	<div class="section-education">
		<div class="section-education__body">
			<a-row type="flex" v-for="degree in education" :key="education.degree">
				<a-col :xs="24" :md="8" class="section-education__body--logo">
					<img v-bind:src="degree.logo" :alt="degree.university" class="company-logo">
				</a-col>
				<a-col :xs="24" :md="16" class="section-education__body--details">
					<p class="section-education__body--details__title">{{ degree.degree }}</p>
					<p class="section-education__body--details__course">{{ degree.course }}</p>
					<p class="section-education__body--details__gpa">{{ degree.gpa }}</p>
					<p class="section-education__body--details__university">{{ degree.university }}</p>
					<p class="section-education__body--details__location">{{ degree.location }}</p>
					<p v-if="!degree.certified" class="section-education__body--details__date">{{ degree.from }} to {{ degree.to }}</p>
					<p v-else class="section-education__body--details__date">{{ degree.certified }}</p>
					<ul class="section-education__body--details__electives" v-if="degree.electives">
						<p class="section-education__body--details__electives--header" v-if="degree.electives">Specializations</p>
						<li class="section-education__body--details__electives--item" v-for="elective in degree.electives">{{elective}}</li>
					</ul>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
	const vitLogo = require('../../assets/logos/vit.png');
	const srmLogo = require('../../assets/logos/srm.png');
	const kvLogo = require('../../assets/logos/kv.png');

	export default {
		name: 'Education',
		data() {
			return {
				education: [
					{
						degree: 'Masters of Technology',
						course: 'Computer Science & Engineering',
						university: 'Vellore Institute of Technology',
						location: 'Vellore, Tamil Nadu, India',
						logo: vitLogo,
						from: 'June 2017',
						to: 'May 2019',
						gpa: '8.54 on a scale of 10',
						electives: [
							'Machine Learning',
							'Deep Learning',
							'NoSQL & NewSQL Databases',
							'IoT & Wireless Sensor Networks'
						]
					},
					{
						degree: 'Batchelors of Technology',
						course: 'Computer Science & Engineering',
						university: 'SRM Institute of Science & Technology',
						location: 'Kattankulathur, Chennai, Tamil Nadu, India',
						logo: srmLogo,
						from: 'June 2013',
						to: 'May 2017',
						gpa: '7.36 on a scale of 10',
						electives: [
							'Machine Learning',
							'Deep Learning',
							'Nature Inspired Computing',
							'Fuzzy Logic',
							'Digital Image Processing',
						]
					},
					{
						degree: 'SSLC',
						course: 'Computer Science with Mathematics',
						university: 'Kendriya Vidyalaya',
						location: 'Kolkata, West Bengal, India',
						logo: kvLogo,
						certified: 'June 2013',
						gpa: '8.58 on a scale of 10'
					},
					{
						degree: 'HSC',
						course: 'Science, Mathematics & English',
						university: 'Kendriya Vidyalaya',
						location: 'Kolkata, West Bengal, India',
						logo: kvLogo,
						certified: 'June 2010',
						gpa: '6.8 on a scale of 10'
					},
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-education {
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

				&__course {
					text-transform: uppercase;
					font-weight: 300;
					letter-spacing: .2rem;
					font-size: .85rem;
					margin: .3rem 0;
				}

				&__university {
					color: #000;
					letter-spacing: .12rem;
					margin: .4rem 0 0 0;
				}

				&__location {
					margin-bottom: .2rem;
				}

				&__electives {

					&--header {
						color: #000;
						text-transform: uppercase;
						letter-spacing: .2rem;
						margin: 0;
					}

					&--item {
						margin: .5rem 0 0 1rem;
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