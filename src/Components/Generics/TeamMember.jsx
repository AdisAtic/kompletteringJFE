import React from 'react'

const TeamMember = ({ imageSrc, name, title }) => {
  return (
    <div className="member">
      <img src={imageSrc} alt="Team Member" />
      <h5>{name}</h5>
      <p>{title}</p>
    </div>
  )
}

export default TeamMember