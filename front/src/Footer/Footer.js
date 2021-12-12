import React, {useEffect} from "react";
import './Footer.css';
import {Link} from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from "react-icons/all";
import  Aos from "aos";
import "aos/dist/aos.css";

const Footer = ({navbarLightMode}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  return (
    <div className={navbarLightMode ? 'footer-container lightMode' : 'footer-container'}>
      <div data-aos={"fade-up"} className={'logo-and-social footer-element'}>
        <Link to={'/'} className={'footer-logo'}>Fireship</Link>
        <div className={'social'}>
          <Link to={'/'}><FaFacebook className={'social-icon'}></FaFacebook></Link>
          <Link to={'/'}><FaTwitter className={'social-icon'}></FaTwitter></Link>
          <Link to={'/'}><FaInstagram className={'social-icon'}></FaInstagram></Link>
          <Link to={'/'}><FaYoutube className={'social-icon'}></FaYoutube></Link>
        </div>
      </div>
      <div data-aos={"fade-up"} className={'support footer-element'}>
        <h3>Support</h3>
        <Link to={'/'} className={'link'}>Contact Us</Link>
        <Link to={'/'} className={'link'}>FAQ</Link>
        <Link to={'/privacy-policy'} className={'link'}>Privacy Policy</Link>
      </div>
      <div data-aos={"fade-up"} className={'navigate footer-element'}>
        <h3>Navigate</h3>
        <Link to={'/'} className={'link'}>Main</Link>
        <Link to={'/'} className={'link'}>Menu</Link>
        <Link to={'/about'} className={'link'}>About Us</Link>
        <Link to={'/'} className={'link'}>Reserve</Link>
      </div>
    </div>
  )
}

export default Footer;