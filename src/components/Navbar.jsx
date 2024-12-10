import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6' >
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt="Logo" /> */}
        <div className='mx-2 w-50 font-bold text-3xl'>Sabbir</div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/msmusfique063/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/sabbir-063" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/_sabbir_063/" target='_blank'><FaInstagram /></a>
        <a href="https://x.com/Sabbir_063" target='_blank'><FaTwitter /></a>
        <a href="https://www.facebook.com/sabbir.musfique.5/" target='_blank'><FaFacebook /></a>
      </div>
    </nav>
  )
}

export default Navbar