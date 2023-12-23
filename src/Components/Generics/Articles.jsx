import React from 'react'

const Articles = ({ date, imageSrc, category, title, content }) => {
  return (
    <div className="article">
    <div className="article-date">
      <div className="day">{date.day}</div>
      <div className="month">{date.month}</div>
    </div>
    <img src={imageSrc} alt="Article" />
    <div className="category">{category}</div>
    <h5>{title}</h5> <p>{content}</p>
  </div>
  )
}

export default Articles