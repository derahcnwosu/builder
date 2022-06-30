import React from 'react'
import ImageCard from './shared/ImageCard'
import highrise1 from '../img/highrise/highrise-1.jpg'
import highrise2 from '../img/highrise/highrise-2.jpg'
import highrise3 from '../img/highrise/highrise-3.jpg'
import highrise4 from '../img/highrise/highrise-4.jpg'
import highrise5 from '../img/highrise/highrise-5.jpg'
import highrise6 from '../img/highrise/highrise-6.jpg'

function LatestProjects() {
  return (
    <section className="latest-projects">
        <h1 className='lead-txt-2'>Our Latest Projects</h1>
       <div className="images-section">
            <ImageCard lead='Alex Complex for Residence' bg={highrise1}/>
            <ImageCard lead='Peter Dury House for Commercial' bg={highrise2}/>
            {/* <ImageCard lead='Marina Building' bg={highrise3}/> */}
            {/* <ImageCard lead='Creative Hub NG' bg={highrise4}/> */}
            {/* <ImageCard lead='Talent Nation Space' bg={highrise5}/> */}
            <ImageCard lead='E-center Ozone Cinemas' bg={highrise6}/>
       </div>
    </section>
  )
}

export default LatestProjects