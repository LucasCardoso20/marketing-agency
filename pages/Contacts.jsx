import React from 'react'
import gif from '../images/giphy.gif'
import Image from 'next/image'
const Contacts = () => {
  return (
    <div className='gif-in-production'>
      <h1 className='main-color'>Page in production</h1>
      <Image src={gif}/>
    </div>
  )
}

export default Contacts