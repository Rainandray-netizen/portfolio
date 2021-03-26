import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { 
  faJsSquare, 
  faHtml5, 
  faSass, 
  faCss3Alt, 
  faReact,
  faNodeJs,
  faGitAlt,
  faGithubSquare 
} from '@fortawesome/free-brands-svg-icons'
import {
  faHandshake,
  faCommentDots,
  faLightbulb,
  faChess
} from '@fortawesome/free-solid-svg-icons'


import SkillsTile from './SkillsTile'

const SkillsGrid = () => {

  const isMobile = !useMediaQuery({query:'(min-device-width: 641px)'})

  const iconSize = isMobile ? '6x' : '6x'

  console.log(iconSize)

  const skills = [
    [faReact, 'React'],
    [faJsSquare, 'Javascript'],
    [faHtml5, 'HTML'],
    [faCss3Alt, 'CSS'],
    [faSass, 'Sass'],
    [faNodeJs, 'NodeJS'],
    [faGitAlt, 'Git'],
    [faGithubSquare, 'Github'],
    [faHandshake, 'Collaboration'],
    [faCommentDots, 'Communication'],
    [faChess, 'Problem Solving'],
    [faLightbulb, 'Innovation'],
  ]

  return(
    <div className='skills-grid-container center-contained'>
      {skills.map((skill)=>
        <SkillsTile key={Math.random()*100000000000} size={iconSize} icon={skill[0]} name={skill[1]}/>
      )}
    </div>
  )
}

export default SkillsGrid