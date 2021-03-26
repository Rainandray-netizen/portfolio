import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsTile = ({icon, name, size}) => {
  return(
    <div className='center-contained skills-tile'>
      <FontAwesomeIcon size={size} icon={icon}/>
      <h4>{name}</h4>
    </div>
  )
}

export default SkillsTile