import React from 'react'
import {motion} from 'framer-motion'

function Banner() {

  const projectNo = 345
  const test = () => {
    for(let i = 0; i <= projectNo; i++){
      setTimeout(() => {
        return i
      })
    }
  }
  const num1 = test()

  return (
    <motion.header className="banner"
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition = {{delay: 2, type: 'spring', stiffness: 600}}
    >
        <div className="shade ">
        <motion.h2 className='lead-txt'
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{delay: 4, type: 'spring', stiffness: 600}}
        >Build Your <motion.span className='primary-bg' 
          // initial = {{fontSize: '2rem'}}
          // animate = {{fontSize: '4.5rem'}}
          // transition = {{delay: 4.3, type: 'spring', stiffness: 300}}
        >Dream</motion.span></motion.h2>
        <motion.p className='p-lead'
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{delay: 4.3, duration: 1}}
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti maxime nulla esse! Incidunt natus expedita, eaque repudiandae numquam eos quas.</motion.p>
        <motion.button className="btn-dark" onClick={() => console.log(num1)}
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{delay: 4.4, duration: 0.4}}
        >Discover Now</motion.button>

        {/* <h1>{loopNo}</h1> */}
        </div>
    </motion.header>

  )
}

export default Banner