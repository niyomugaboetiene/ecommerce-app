import Navs from "./pages/Navs"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SignUp from "./pages/Sign-up"
import Home from "./pages/Home"
import FlashSales from "./pages/FlashSales"
import BestSeller from "./pages/BestSeller"
import LastPage from "./pages/LastPage"
import Footer from "./pages/Footer"
import OurProduct from "./pages/AllOurProduct"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
          <Navs />
          <div className="pt-32 h-screen flex flex-col">
           <Routes>
              <Route path="/" element={
                <div className="overflow-y-scroll scroll-smooth">
                      <section className="h-screen">
                         <Home />
                      </section>
                    
                    <section>
                         <FlashSales />
                      </section>  

                    <section>
                         <BestSeller />
                      </section>  
                      <section>
                         <OurProduct />
                      </section>    
                       <section>
                         <LastPage />
                      </section>
                </div>
              }
             />

              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/footer" element={<Footer />} />
         </Routes>
          </div>

      </BrowserRouter>
    </>
  )
}

export default App
