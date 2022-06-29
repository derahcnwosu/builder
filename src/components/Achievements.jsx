import React from 'react'
import CountDiv from './shared/CountDiv'
import {motion} from 'framer-motion'

function Achievements() {

    

  return (
    <section className="achievements">
      <motion.div className="counters"
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        viewport = {{once: false}}
        transition = {{delay: 0.5, duration: 0.5}}
      >
       <CountDiv para='Projects Completed' end='400'/>
       <CountDiv para='Really Happy Clients' end='185'/>
       <CountDiv para='Total Tasks Completed' end='3120'/>
       <CountDiv para='Cups of Coffee Taken' end='500'/>
       <CountDiv para='In house Professionals' end='200'/>
    </motion.div>
    </section>
  )
}

export default Achievements
