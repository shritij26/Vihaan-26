import React from 'react'
import "./About.css"
import Header from './Header'
import Description from './Description'
import Alumni from './Alumni'
import Contacts from './Contacts'
import Socials from './Socials'

export default function About() {
  return (
    <div className='About'>
      <Header />
      <Description />
      <Alumni />
      <Contacts />
      <Socials />
    </div>
  )
}

