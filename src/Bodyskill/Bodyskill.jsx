import React from 'react'
import './Bodyskill.css'
import LeftSkill from './LeftSkill'
import Rightskill from './Rightskill'

export default function Bodyskill() {
  return (
    <div className='skill-grid'>
      <LeftSkill />
      <Rightskill />
    </div>
  )
}
