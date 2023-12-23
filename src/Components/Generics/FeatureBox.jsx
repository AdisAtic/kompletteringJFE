import React from 'react'

const FeatureBox = ({ iconClass, title, description }) => {
  return (
    <div className="feature-box">
      <i className={iconClass}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default FeatureBox