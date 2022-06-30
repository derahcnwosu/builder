import React from 'react'
import Expert from './shared/Expert'
import expert1 from '../img/people/person-1.jpg'
import expert2 from '../img/people/person-2.jpg'
import expert3 from '../img/people/person-3.jpg'
import expert4 from '../img/people/person-4.jpg'

function ExpertsSection() {
  return (
    <div className="experts-section">
        <h1 className='lead-txt-2'>Meet Our Experts</h1>
        <p>Who are extremely in love with eco friendly system.</p>

        <div className="experts">
          <Expert pic={expert1} expert_name = 'John Smith' expert_role='Managing Director(Sales)' />
          <Expert pic={expert2} expert_name = 'Mary Anderson' expert_role='Managing Director(IT/Operations)'/>
          <Expert pic={expert3} expert_name = 'Anita Sheffield' expert_role='Managing Director(Finance)'/>
          <Expert pic={expert4} expert_name = 'Juliana Cambridge' expert_role='Managing Director(HR)'/>
        </div>
    </div>
  )
}

export default ExpertsSection