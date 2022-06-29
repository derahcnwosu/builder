import React from 'react'

function Expert({expert_name, expert_role, pic}) {
  return (
    <div className="expert">
        <div className="expert-img" style={{background: `url(${pic}) no-repeat center center/cover`}}></div>
        <div className="expert-info">
            <h2>{expert_name}</h2>
            <p>{expert_role}</p>
        </div>
    </div>
  )
}

export default Expert