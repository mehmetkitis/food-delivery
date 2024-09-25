import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceHolder from './pages/placeHolder/PlaceHolder'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import PrivateRoute from './PrivateRoute'

const App = () => {

  return (
    <>
      <div className='app' >
        <Navbar />
        <Switch >
          <Route path="/login">
            <LoginPopUp />
          </Route>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <PlaceHolder />
          </PrivateRoute>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>

  )
}

export default App
