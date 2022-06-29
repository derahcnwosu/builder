import React from 'react'
import CountUp from 'react-countup'

function CountDiv({end,para}) {
  return (
    <div className="count-div">
        <h1 className='counter'><CountUp end={end} enableScrollSpy='true' scrollSpyOnce = 'false'/></h1>
        <p>{para}</p>
    </div>
  )
}

export default CountDiv
