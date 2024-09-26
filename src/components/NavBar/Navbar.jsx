import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { Link, NavLink, useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext)
  const { logOut, isLoggedIn } = useContext(AuthContext)
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login")
  }


  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.orange} className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <NavLink to={isLoggedIn ? "/cart" : "/login"}><img src={assets.basket_icon} /></NavLink>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={handleLogin} >Sign in</button>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Navbar
