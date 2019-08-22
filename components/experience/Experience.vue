<template>
	<div class="section-experience">
		<div class="section-experience__body">
			<a-row type="flex" v-for="experience in experiences" :key="experience.company">
				<a-col :xs="24" :md="6" class="section-experience__body--logo">
					<img src="../../assets/logos/vodafone.png" :alt="experience.company" class="company-logo">
				</a-col>
				<a-col :xs="24" :md="18" class="section-experience__body--details">Right</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Experience',
		data() {
			return {
				experiences: [
					{
						company: 'Philips',
						location: 'Bangalore',
						logo: '../../assets/logos/philips.jpg',
						designations: [
							{
								title: 'Software Engineer',
								from: 'June 2019',
								to: 'Present',
								roles: [
									'Collaborated with various teams to develop apps which provides interoperability among various Philips systems',
									'Developed full-stack applications using latest and best technologies such as GraphQL, MongoDB, Vue.js and Nuxt.js',
									'Dockerized applications for deployment in CI/CD pipelines'
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
						location: 'Kolkata',
						logo: '../../assets/logos/vodafone.png',
						designations: [
							{
								title: 'Intern',
								from: 'May 2015',
								to: 'June 2015',
								roles: [
									'Collaborated with various teams to develop apps which provides interoperability among various Philips systems',
									'Developed full-stack applications using latest and best technologies such as GraphQL, MongoDB, Vue.js and Nuxt.js',
									'Dockerized applications for deployment in CI/CD pipelines'
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
		height: 60vh;
		padding: 3rem 2rem;
		position: relative;

		&__body {
			
			&--logo {
				text-align: center;
				padding: 1rem;
			}

			&--details {
				padding: 1rem;
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