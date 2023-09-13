// --- page
// general level
import HomeView from '@page/Home/HomePage.vue'

// code-spliting level
const AboutView = () => import('@page/About/AboutPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

export default routes
