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
          <div className="pt-32 min-h-screen flex flex-col">
           <Routes>
              <Route path="/" element={
                <div className="min-h-screen flex flex-col">
                  <div className="flex-grow overflow-y-scroll scroll-smooth">
                    <section>
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
                  <Footer />
                </div>
              }/>

              <Route path="/contact" element={
                <div className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                    <Contact />
                  </div>
                  <Footer />
                </div>
              } />
              
              <Route path="/about" element={
                <div className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                    <About />
                  </div>
                  <Footer />
                </div>
              } />
              
              <Route path="/sign-up" element={
                <div className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                    <SignUp />
                  </div>
                  <Footer />
                </div>
              } />
           </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App