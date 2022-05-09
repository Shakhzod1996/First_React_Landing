import React from 'react'
import './Webinar.css'

export default function WebinarCard({back}) {
  return (
    <div className='web-card-main'>
      <img src={back} alt="img" />
      <div className='play'>
        <i className='bx bx-play'></i>
      </div>
    </div>
  )
}
