import projects from '../data/projects.json'
import experience from '../data/experience.json'
import {
  HomeNav,
  Hero,
  Experience,
  SelectedWork,
  Thinking,
  Approach,
  About,
  Contact,
  HomeFooter,
} from '../sections/home'

const recentExp = [...experience]
  .sort((a, b) => b.startYear - a.startYear)
  .slice(0, 3)

function Home() {
  return (
    <div>
      <HomeNav />
      <Hero />
      <Experience items={recentExp} />
      <SelectedWork projects={projects} />
      <Thinking />
      <Approach />
      <About />
      <Contact />
      <HomeFooter />
    </div>
  )
}

export default Home
