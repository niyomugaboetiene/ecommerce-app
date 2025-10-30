import Navs from "./pages/Navs"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SignUp from "./pages/Sign-up"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
          <Navs />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
