import { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    const handleScrole=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',handleScrole)
    return()=>{
      window.removeEventListener('scroll',handleScrole)
    }
  },[])
  return (
    <>
    {/* z-50 to stack the card below navbar */}
      <div className={` w-[100vw] fixed border-b-2 z-50 navbar bg-base-100${sticky?"sticky-navbar shadow-xl bg-base-200 duration-75 transition-all ease-in-out":"" }`}>
  <div className="navbar-start">
    <div className="dropdown"> 
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">CRUD</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/contact">Pagination</Link></li>
        <li><Link to="/table">Table</Link></li>
      </ul>
    </div>
    <a className="text-2xl font-bold btn btn-ghost"><FaBookReader />Books And Books </a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">CRUD</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Pagination</Link></li>
      <li><Link to="/table">Table</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  <button className="mr-5 btn btn-accent w-28">Login</button>
  </div>
</div>
    </>
  )
}

export default Navbar