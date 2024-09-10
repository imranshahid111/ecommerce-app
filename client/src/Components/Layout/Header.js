import React from 'react'
import{NavLink, Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { useAuth } from '../../Context/Auth';
import toast from 'react-hot-toast';

function Header() {
  const [auth , setAuth] = useAuth()
  const handleLogout = () =>{
    setAuth({
      ...auth ,
      user : null,
      token : '',
    })
    localStorage.removeItem('auth');
    toast.success('Logout Successfull')
  }
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" ><FaShopify style={{ fontSize: '35px', paddingBottom:'7px' }} /> Ecommerce app</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link" >Category</NavLink>
        </li>
        {
          !auth.user ? (
            <>
               <li className="nav-item">
          <NavLink  to="/register" className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/login" className="nav-link" >Login</NavLink>
        </li>
            </>
          ) : (
            <>
                  <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to={'/dashboard'} className="dropdown-item bg-white text-black">Dashboard</NavLink></li>
              
            <li>
              <NavLink onClick={handleLogout} to={'/login'} className="dropdown-item bg-white text-black">Logout</NavLink></li>
             </ul>
            </li>

             </>
          )
        }

      
        <li className="nav-item">
          <NavLink  to="/cart" className="nav-link">Cart (0)</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

</>
  )
}

export default Header