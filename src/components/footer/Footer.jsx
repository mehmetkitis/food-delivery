import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto ullam. Vel facere veniam ut, dolorum corrupti quam sapiente perspiciatis! Earum quaerat eos asperiores repellendus corporis necessitatibus, dolorem doloribus nisi.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+7-123-4124-4214-24414</li>
                <li>dsadasfasf@asfsfsa.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 fsafsafsafsafasfasfasfsafasfss - All Right Reserved</p>
    </div>
  )
}

export default Footer
