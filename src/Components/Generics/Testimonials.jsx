import React from 'react'

const Testimonials = ({ rating, content, writerImage, writerName, writerTitle }) => {
  return (
    <div className="testimonial">
      <a className="rating">
        {Array.from({ length: rating }, (_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
      </a>
      <br />
      <p>{content}</p>
      <div className="writer">
        <img src={writerImage} alt="Writer" />
        <h5>{writerName}</h5>
        <p>{writerTitle}</p>
      </div>
    </div>
  )
}

export default Testimonials