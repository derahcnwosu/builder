import React from 'react'
import Card from './shared/Card'
import {FaBuilding, FaTractor, FaScrewdriver} from 'react-icons/fa'
import {motion} from 'framer-motion'

function OfferedServices() {
  return (
    <section className="services">
        <motion.h1 className='lead-txt-2'
          initial = {{opacity: 0}}
          whileInView = {{opacity: 1}}
          viewport = {{once: false}}
          transition = {{delay: 0.5, duration: 0.2}}
        >Our Offered Services</motion.h1>
        <motion.p className='p-lead-2'
          initial = {{opacity: 0}}
          whileInView = {{opacity: 1}}
          viewport = {{once: false}}
          transition = {{delay: 0.55, duration: 0.2}}
        >Lorem ipsum dolor sit amet consectetur adipisicing.</motion.p>

        <div className="cards">
            <Card icon={<FaBuilding className='service-icon' color='#ffc107'/>} lead='Building Drawings' para= 'We give premium 3D building drawings for your projects' delay='0.5' duration='0.2'/>
            <Card icon={<FaTractor className='service-icon' color='#ffc107'/>} lead='Painting Constructions' para= 'If you need to paint your buildings or interiors' delay='0.8' duration='0.4'/>
            <Card icon={<FaScrewdriver className='service-icon' color='#ffc107'/>} lead='Repairing Constructions' para= 'We handle repairs of all types of building facilites' delay='1' duration='0.6'/>
        </div>
    </section>
  )
}

export default OfferedServices