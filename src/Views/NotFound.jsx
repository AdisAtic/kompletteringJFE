import React from 'react'
import pagenotFound from '../assets/images/pagenotfound.png'
import Buttons from '../Components/Generics/Buttons'


const NotFound = () => {
  return ( 
    <>
    <div className="pagenotfound">
      <img src={pagenotFound} />
      <h1>404 Page Not Found</h1>
    </div>
    <div className="return-home">  
      <Buttons type="yellow" title="Return Back Home" url="/" />
    </div>
    
    </>
  )
}

export default NotFound