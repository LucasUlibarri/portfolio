import { Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Project from "./pages/Project"
import About from "./pages/About"

function App() {
     return(
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </>
     )
}

export default App