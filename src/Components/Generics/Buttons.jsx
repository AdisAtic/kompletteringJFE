import React from 'react'

const Buttons = ({type, url, title}) => {


    const getButtonClassName =() => {
        switch(type) {
        case 'yellow':
            return 'btn-theme'
        case 'dark':
            return 'btn-dark'
        case 'play':
            return 'btn-white-play'  
        default:
                return 'btn-outline-dark'


        }        
    }


  return (
    <a className={getButtonClassName()} href={url}>{title} <i className="fa-solid fa-square-arrow-up-right"></i></a>
  )
}

export default Buttons