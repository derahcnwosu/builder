import React from 'react'
import {motion} from 'framer-motion'

function Card({lead, para, icon, delay, duration}) {
  return (
    <motion.div className="card"
    initial = {{opacity: 0}}
    whileInView = {{opacity: 1}}
    transition = {{delay: delay, duration: duration}}
    viewport = {{once: false}}
    >
        <p>{icon}</p>
        <h1>{lead}</h1>
        <p>{para}</p>
    </motion.div>
  )
}

export default Card