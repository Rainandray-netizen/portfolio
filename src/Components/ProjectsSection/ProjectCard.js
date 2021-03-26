import React from 'react'

const ProjectCard = ({project}) => {
  const {title,image,desc,technologies} = project
  // console.log(project)
  return(
    <div className='card-wrapper'>
      <p>{image}</p>
      <div>
        <h3>{title}</h3>
        <hr />
        <p>{desc}</p>
        <p>{technologies}</p>
      </div>
    </div>
  )
}

export default ProjectCard