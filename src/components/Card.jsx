
import React from 'react'
import Boltstack from '../images/BoltstackSS.png'
import './'



export const Card = () => {
  return (
    <div className='card-container'> 
        <h1 className='card-title'>Card Title</h1>
        <img className='card-img' src={Boltstack}></img>
        <p className='card-info'>This is the card description and what I did on the project</p>Card
        <a href="www.google.com" target='blank'>Card Link</a>


        </div>

)
}
