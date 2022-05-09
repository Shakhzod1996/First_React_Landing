import React from 'react'
import './GetApp.css'
import LeftUp from './LeftUp'
import RightUp from './RightUp'

export default function GetApp() {
  return (
    <div className='get-app'>
      <div className='container'>
        <div className='get-app-in'>
          <LeftUp />
          <RightUp />
        </div>
      </div>
    </div>
  )
}
