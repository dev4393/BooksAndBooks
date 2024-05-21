import About from "./comonents/About";
import Contact from "./comonents/Contact";
import Courses from "./comonents/Courses";
import Footer from "./comonents/Footer";
import Home from "./comonents/Home";
import Navbar from "./comonents/Navbar";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{}
})
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div >
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Navbar />
      <hr className="mb-36" />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </div>
  )
}

export default App