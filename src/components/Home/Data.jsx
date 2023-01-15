import React from 'react'
import "./Home.css"
const Data = () => {
  return (
    <div className="home__data">
        <h1 className='home__title'>Atul Sahu
        <span className="wave " role="img" aria-labelledby="wave" >
                  👋🏻
        </span></h1>
        {/* <h3 className="home__subtitle"> </h3> */}
        <h3 className='home__description' >I'm an aspiring Full Stack Developer </h3>
        <a href=" " className="button button--flex">
            say hello
        </a>
    </div>
  )
}

export default Data