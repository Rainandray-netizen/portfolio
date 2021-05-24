import alohaGif from './assets/images/aloha.gif'
import steffectGif from './assets/images/steffect.gif'

console.log(alohaGif)
const projectData = [
  {
    title: 'Aloha',
    image: alohaGif,
    desc: 'Aloha is the mockup front page of an ecommerce fashion website.  It was built mobile-first, using breakpoints to give the website a sleek, polished feel on mobile',
    technologies: 'HTML, CSS, Javascript',
  },
  {
    title: 'Steffect',
    image: steffectGif,
    desc: 'Steffect is a fully functional, mobile-first built ecommerce website with a fully customizable Strapi back end.  The front end was built from scratch in React, building on an earlier HTML and SASS mockup of the site.  The styling has been done in SASS for the syntactic clarity it provides.  A live version is available at steffect.herokuapp.com.',
    technologies: 'React, SASS, Javascript, HTML, Stripe, Git'
  }
]

export default projectData