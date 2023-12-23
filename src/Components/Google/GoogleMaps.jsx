import './GoogleMaps.css'

import React from 'react'
import googleMaps from '../../assets/images/googlemaps.png'

const GoogleMaps = () => {
  return (
    <div className="googlemaps-section">
      <img src={googleMaps} alt="Google Maps" />
    </div>
  )
}

export default GoogleMaps