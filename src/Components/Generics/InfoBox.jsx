import React from 'react'

const InfoBox = ({ iconClass, title, address, }) => {
    
    const addressLines = address.split(<br/>)
  
    return (
    <div className="contactbox-section">
      <div className="container">
        <div className="infobox">
          <a className="black-circle">
            <i className={iconClass}></i>
          </a>
          <h6 className="title">{title}</h6>
          {/* Map through the address lines to create separate <div> elements */}
          {addressLines.map((line, index) => (
            <div key={index} className="info">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoBox