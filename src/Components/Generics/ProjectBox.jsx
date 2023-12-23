import React from 'react'

const ProjectBox = ({ imageUrl, title, linkText, linkIconClass }) => {
  return (
    <div className="project-grid">
    <a href="#" className="project">
      <img src={imageUrl} alt="Project Image" />
      <h5>{title}</h5>
      <p>{linkText}<i className={linkIconClass}></i></p>
    </a>
  </div>
  )
}

export default ProjectBox