<template>
	<div class="navigation">
		<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
		<label for="navi-toggle" class="navigation__button">
		    <span class="navigation__icon">&nbsp;</span>
		</label>

		<div class="navigation__background">&nbsp;</div>

		<nav class="navigation__nav">
		    <ul class="navigation__list">
		        <li class="navigation__item" v-for="item in navList" v-if="item.link!=currentRoute">
		        	<nuxt-link :to="item.link" class="navigation__link">
		        		{{item.title}}
		        	</nuxt-link>
		        </li>
		    </ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Navigation',
		data() {
			return {
				currentRoute: '',
				navList: [
					{
						title: 'Profile',
						link: '/'
					},
					{
						title: 'Experiences',
						link: '/experience'
					},
					{
						title: 'Alma Mater',
						link: '/education'
					},
					{
						title: 'Projects',
						link: '/projects'
					},
					{
						title: 'Certifications',
						link: '/certifications'
					},
				]
			}
		},
		mounted() {
			this.currentRoute = this.$route.path;
		}
	}
</script>

<style lang="scss" scoped>
	.navigation {
		&__checkbox {
		    display: none;
		}

		&__button {
		    background-color: #fff;
		    height: 3rem;
		    width: 3rem;
		    position: fixed;
		    top: 2rem;
		    right: 2rem;
		    border-radius: 50%;
		    z-index: 2000;
		    box-shadow: 0 1rem 3rem rgba(#000, .1);
		    text-align: center;
		    cursor: pointer;
		}

		&__background {
		    height: 2rem;
		    width: 2rem;
		    border-radius: 50%;
		    position: fixed;
		    top: 2.5rem;
		    right: 2.5rem;
		    background-image: radial-gradient(#1CB5E0, #000046);
		    z-index: 1000;
		    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
		}

		&__nav {
		    height: 100vh;
		    position: fixed;
		    top: 0;
		    left: 0;
		    z-index: -10;
		    opacity: 0;
		    width: 0;
		    transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		}

		&__list {
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%,-50%);
		    list-style: none;
		    text-align: center;
		    letter-spacing: .3rem;
		    width: 100%;
		}

		&__item {
		    margin: 1rem;
		}

		&__link {
		    &:link,
		    &:visited {
		        display: inline-block;
		        font-size: 1.5rem;
		        font-weight: 300;
		        padding: .6rem 1.2rem;
		        color: #fff;
		        text-decoration: none;
		        text-transform: uppercase;
		        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
		        background-size: 250%;
		        transition: all .4s;
		    }
		    
		    &:hover,
		    &:active {
		        background-position: 100%;
		        color: #1CB5E0;
		    }
		}


		//FUNCTIONALITY
		&__checkbox:checked ~ &__background {
		    transform: scale(120);
		}

		&__checkbox:checked ~ &__nav {
		    opacity: 1;
		    width: 100%;
		    z-index: 1500;
		}


		//ICON
		&__icon {
		    position: relative;
		    margin-top: 1.5rem;

		    &,
		    &::before,
		    &::after {
		        width: 1.5rem;
		        height: 2px;
		        background-color: grey;
		        display: inline-block;
		    }

		    &::before,
		    &::after {
		        content: "";
		        position: absolute;
		        left: 0;
		        transition: all .2s;
		    }

		    &::before { top: -.5rem; }
		    &::after { top: .5rem; }
		}

		&__button:hover &__icon::before {
		    top: -.6rem;
		}

		&__button:hover &__icon::after {
		    top: .6rem;
		}

		&__checkbox:checked + &__button &__icon {
		    background-color: transparent;
		}

		&__checkbox:checked + &__button &__icon::before {
		    top: 0;
		    transform: rotate(135deg);
		}

		&__checkbox:checked + &__button &__icon::after {
		    top: 0;
		    transform: rotate(-135deg);
		}
	}
</style>