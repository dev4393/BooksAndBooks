import About from "./comonents/About";
import Carousel from "./comonents/Carousel"
import Contact from "./comonents/Contact";
import Home from "./comonents/Home";
import Navbar from "./comonents/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="text-3xl font-bold">

      <BrowserRouter>
      <Navbar />
      <Carousel />
      <Routes>
      <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App