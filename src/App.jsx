import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Project from "./pages/Project"
import About from "./pages/About"
import Play from './pages/Play'

function App() {
     return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path='/play' element={<Play/>}/>
        </Routes>
     )
}

export default App