import projects from '../data/projects.json'
import FloatingNav from '../components/FloatingNav'
import Footer from '../components/Footer'
import {
  Hero,
  SelectedWork,
  Process,
  Contact,
} from '../sections/home'

function Home() {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <SelectedWork projects={projects} />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
