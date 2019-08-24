export const state = () => ({
	aboutMe: 'Hi, glad you\'re here! I\'m a researcher in Artificial Intelligence and Machine Learning, with extensive hands on experience as a full-stack developer. I\'ve been working on several projects, incorporating deep learning and refined neural networks to solve critical problems, improve performance and develop smarter and more reliable applications. I also architect and develop scalable applications with intuitive and responsive UI/UX designs, microservices and polyglot powered architectures. I embrace and incorporate newer and meaningful tools and technologies in my application architecture, such as GraphQL, PWA\'s and combination of RDBMS, NoSQL and NewSQL databases.',
	currentLocation: 'Bangalore, Karnataka, India'
})

export const getters = {
	getAboutMe: state => {
		return state.aboutMe;
	},
	getCurrentLocation: state => {
		return state.currentLocation;
	}
}