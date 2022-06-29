import React from 'react'
import {FaCube, FaSearch, FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <nav className="navbar">
        <motion.div className="logo" 
        
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{delay: 0.5, duration: 0.5}}
        
        ><FaCube className='builder-logo'/> Builder</motion.div>
        <ul>
            <motion.li 
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 1, duration: 0.6}}
            ><Link to='/' className='navlink'>HOME</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 1.5, duration: 0.6}}
            ><Link to='/about' className='navlink'>ABOUT</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 2, duration: 0.6}}
            ><Link to='/services' className='navlink'>SERVICES</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 2.5, duration: 0.6}}
            ><Link to='/pages' className='navlink'>PAGES</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 3, duration: 0.6}}
            ><Link to='/blog' className='navlink'>BLOG</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 3.5, duration: 0.6}}
            ><Link to='/contact' className='navlink'>CONTACT</Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 4, duration: 0.6}}
            ><Link to='/*' className='navlink'><FaSearch/></Link></motion.li>
            <motion.li
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 4, duration: 0.6}}
            ><Link to='/*' className='hamburger'><FaBars/></Link></motion.li>
        </ul>
    </nav>
  )
}

export default Navbar
