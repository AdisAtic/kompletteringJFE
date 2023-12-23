import React from 'react'

const PageDots = ({ numberOfDots, activeIndex }) => {

    const dots = Array.from({ length: numberOfDots }, (_, index) => (
        <div key={index} className={`dot-circle ${index === activeIndex ? 'active' : ''}`}></div>
      ));

  return (
    <div className="dot-circles">{dots}</div>
  )
}

export default PageDots