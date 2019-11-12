<template>
	<div class="section-experience">
		<div class="section-experience__body">
			<a-row type="flex" v-for="experience in experiences" :key="experience.company">
				<a-col :xs="24" :md="4" class="section-experience__body--logo">
					<img v-bind:src="experience.logo" :alt="experience.company" class="company-logo">
				</a-col>
				<a-col :xs="24" :md="20" class="section-experience__body--details">
					<p class="section-experience__body--details__title">{{ experience.company }}</p>
					<p class="section-experience__body--details__location">{{ experience.location }}</p>
					<div class="section-experience__body--details__roles" v-for="designation in experience.designations">
						<p class="section-experience__body--details__roles--title">{{ designation.title }}</p>
						<p class="section-experience__body--details__roles--time">{{ designation.from }} to {{ designation.to }}</p>
						<ul class="section-experience__body--details__roles--activity">
							<li v-for="role in designation.roles" class="section-experience__body--details__roles--activity__item">{{ role }}</li>
						</ul>
					</div>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
	const philipsLogo= require('../../assets/logos/philips.jpg');
	const vodafoneLogo= require('../../assets/logos/vodafone.png');

	export default {
		name: 'Experience',
		data() {
			return {
				experiences: [
					{
						company: 'Philips',
						location: 'Bangalore, Karnataka, India',
						logo: philipsLogo,
						designations: [
							{
								title: 'Software Engineer',
								from: 'June 2019',
								to: 'Present',
								roles: [
									'Undertaken full-stack projects and incorported latest and best technologies to boost performance, scalability and reliability, and deliver responsive user experience across devices',
									'Helped achieve interoperability among multiple independent teams across Philips ecosystem',
									'Demonstrated experience in designing and delivering quality solutions and prototypes in limited timespan and short deadlines, which helped Philips win contracts with external organizations',
									'Hands on experience in Containerization, RESTful Web Services, GraphQL and NoSQL databases along with RDBMS',
									'Recognition for leadership - Take Ownership to Deliver Fast'
								]
							},
							{
								title: 'Intern',
								from: 'August 2018',
								to: 'June 2019',
								roles: [
									'Worked as an Open Source Developer and initiated, planned, designed and delivered multiple mission critical projects',
									'Undertaken full-stack development projects and incorported latest and best technologies like Vue.js, Nuxt.js, GraphQL and Express.js to boost performance, scalability and reliability, and deliver responsive user experience',
									'Hands on experience in RESTful web services, containerization and NoSQL databases like MongoDB and CouchDB, along with Relational Databases'
								]
							},
						]
					},
					{
						company: 'Vodafone',
						location: 'Kolkata, West Bengal, India',
						logo: vodafoneLogo,
						designations: [
							{
								title: 'Intern',
								from: 'May 2015',
								to: 'June 2015',
								roles: [
									'Web developer responsible for the design, development and optimization of several fully responsive websites using React.js',
									'Contributed to the upgradation of E-TopUp module and automate prepaid recharges'
								]
							},
						]
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-experience {
		width: 100vw;
		position: relative;

		&__body {
			padding: 3rem 1rem;
			
			&--logo {
				text-align: center;
				padding: 0rem 1rem;
			}

			&--details {
				padding: 1rem;

				p {
					margin: 0;
					padding: 0;
				}

				&__title {
					color: #000;
					text-transform: uppercase;
					font-weight: 600;
					letter-spacing: .25rem;
					font-size: 1.2rem;
				}

				&__roles {
					margin-top: 1.3rem;

					&--title {
						color: #000;
						text-transform: uppercase;
						letter-spacing: .25rem;
					}

					&--activity {
						margin-left: 1.5rem;

						&__item {
							margin-top: .5rem;
							text-align: justify;
						}
					}
				}
			}
		}
	}

	.company-logo {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		transition: all .7s;

		&:hover {
			text-shadow: .5rem 1rem 2rem rgba(#000, .6);
		}
	}
</style>