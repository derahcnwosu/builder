import React from 'react'
import {motion} from 'framer-motion'

function ImageCard({lead, para, bg}) {


  return (
    <div className="image-card" style={{background: `url(${bg}) no-repeat center center/cover`}}>
        <motion.div className="shade"
            initial = {{opacity: 0}}
            whileHover = {{opacity: 1, transform: 'rotateY(360deg)'}}
            transition = {{delay: 0, duration: 0.5}}
        >
            <h1>{lead}</h1>
            <p>{para}</p>
        </motion.div>
    </div>
  )
}

export default ImageCard