import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navs from "./pages/Navs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/Sign-up";
import Home from "./pages/Home";
import FlashSales from "./pages/newProducts.jsx";
import BestSeller from "./pages/BestSeller";
import LastPage from "./pages/LastPage";
import Footer from "./pages/Footer";
import OurProduct from "./pages/AllOurProduct";
import AddProduct from "./pages/AddProduct";
import WomenFashion from "./pages/WomenFashion.jsx";
import MenFashion from "./pages/MenFashion.jsx";
import Electronics from "./pages/Electronics.jsx";
import Lifestyle from "./pages/LifeStyle.jsx";
import Toys from "./pages/Toys.jsx";
import Health from "./pages/Health.jsx";
import RegisterAccount from "./pages/Register.jsx";

function Layout({ children }) {
  const location = useLocation();

  const hideNavAndFooter = ["/register", "/sign-up"];

  const shouldHide = hideNavAndFooter.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navs />}
      <div className="pt-32 min-h-screen flex flex-col">{children}</div>
      {!shouldHide && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <FlashSales />
                <BestSeller />
                <OurProduct />
                <LastPage />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/women" element={<WomenFashion />} />
          <Route path="/men" element={<MenFashion />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/toy" element={<Toys />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/register" element={<RegisterAccount />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
