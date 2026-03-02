import { Routes, Route } from "react-router"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"  
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ScrollToTopButton from "./components/ScrollToTopButton"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
      <ScrollToTopButton />
    </>
  )
}

export default App