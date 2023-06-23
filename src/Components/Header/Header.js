import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {


  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">

            <li className="nav-item"><NavLink to="/" className="item">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/product" target="_blank" className="item">Product</NavLink></li>
            <li className="nav-item"><NavLink to="/destination" target="_blank" className="item">Destination</NavLink></li>
            <li className="nav-item"><NavLink to="/event" target="_blank" className="item">Event</NavLink></li>
            <li className="nav-item"><NavLink to="/about" target="_blank" className="item">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" target="_blank" className="item">Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/login" target="_blank" className="item">Login</NavLink></li>
          </ul>

          <h1 className="logo">Travel Visit</h1>

        </div>

      </div>
    </div>
  )
}


/*<div>
  <header>
    <NavLink href="#" className='logo'>Travel Visit</NavLink>
    <nav className='navbar'>
      <ul>

        <li className="nav-item"><NavLink to="/" className="item">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/product" target="_blank" className="item">Product</NavLink></li>
        <li className="nav-item"><NavLink to="/destination" target="_blank" className="item">Destination</NavLink></li>
        <li className="nav-item"><NavLink to="/event" target="_blank" className="item">Event</NavLink></li>
        <li className="nav-item"><NavLink to="/about" target="_blank" className="item">About</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" target="_blank" className="item">Contact</NavLink></li>
        <li className="nav-item"><NavLink to="/login" target="_blank" className="item">Login</NavLink></li>
      </ul>

      <h1 className="logo">Travel Visit</h1>
    </nav>
  </header>

</div>

/* <div className='container'>     <div className='top-nav'>
        <div className='nav'>
          <a className="logo1" href="/">Travel Visit</a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle" >
        <div className='menu-button'></div>
        </label>
        
        <ul className='menu'>
          <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/product" target="_blank" className="nav-link">Product</NavLink></li>
          <li className="nav-item"><NavLink to="/destination" target="_blank" className="nav-link">Destination</NavLink></li>
          <li className="nav-item"><NavLink to="/event" target="_blank" className="nav-link">Event</NavLink></li>
          <li className="nav-item"><NavLink to="/about" target="_blank" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" target="_blank" className="nav-link">Contact</NavLink></li>
        </ul>
       
        <div className="but">
          <NavLink to="/login" className="nav-link"><button>Log in</button></NavLink>
          <NavLink  to="#top" className="nav-link"><button>Sign up</button></NavLink>
        </div>

    

      </div>
  </div>

  )
 */
export default Header;