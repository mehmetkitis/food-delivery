import React, { useContext, useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

const LoginPopUp = () => {
  const [currState, setCurrState] = useState("Sign Up")
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const { initAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    initAuth(form);
    history.push("/")
  }


  return (
    <div className='loginpopup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => { history.push("/") }} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          <input type="name" name='username' value={form.username} placeholder='Your name' onChange={handleChange} required />
          <input type="password" name='password' value={form.password} placeholder='Password' onChange={handleChange} required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a new accout ? <span onClick={() => { setCurrState("Sign Up") }}>Click here</span></p>
          : <p>Already have an account ?<span onClick={() => { setCurrState("Login") }}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp
