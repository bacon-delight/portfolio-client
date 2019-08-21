export const state = () => ({
	aboutMe: 'I\'m an open source developer with experience in latest and meaningful technologies which helps build apps with better performance, scalability and user experience. I work on full-stack projects and I integrate neural networks and deep learning algorithms to make them smarter, faster and more reliable. I also have extensive hands-on experience in RESTful web services, as well as in several NoSQL and NewSQL databases, and polyglot powered Single Page Applications.',
	currentLocation: 'Bangalore, Karnataka, India, Planet Earth'
})

export const getters = {
	getAboutMe: state => {
		return state.aboutMe;
	},
	getCurrentLocation: state => {
		return state.currentLocation;
	}
}