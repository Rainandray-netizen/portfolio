import React from 'react'
import SkillsGrid from '../SkillsGrid/SkillsGrid'

const SecondSection = () => {
  return(
      <section className='skills-section banner-header-container'>
        <div className='center-contained'>
          <h1>Skills</h1>
        </div>
          <SkillsGrid />
      </section>
  )
}

export default SecondSection