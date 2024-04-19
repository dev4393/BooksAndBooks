import About from "./comonents/About";
import Banner from "./comonents/Banner";
import Contact from "./comonents/Contact";
import Courses from "./comonents/Courses";
import Footer from "./comonents/Footer";
import Home from "./comonents/Home";
import Navbar from "./comonents/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div >

      <BrowserRouter>
      <Navbar />
      <Banner />
      <Routes>
      <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App