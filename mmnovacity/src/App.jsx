import { Routes, Route, useLocation } from "react-router"
import Box from "@mui/material/Box"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"  
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ScrollToTopButton from "./components/ScrollToTopButton"
import AlwaysOnTop from "./components/AlwaysOnTop";



function PageFade({ children }) {
  const location = useLocation();

  return (
    <Box
      key={location.pathname}
      sx={{
        animation: "pageFade 450ms ease both",
        "@keyframes pageFade": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
      }}
    >
      {children}
    </Box>
  );
}


function App() {
  return (
    <>

      <AlwaysOnTop />
        <Navbar />
          <PageFade>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            
            </Routes>
          </PageFade>
        <Footer/>
      <ScrollToTopButton />
  
    </>
  )
}

export default App