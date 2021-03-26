import React from 'react'
import projectData from '../../projectData'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {

  return(
    <section>
      {projectData.map((project)=>{ 
        return(
          <ProjectCard project={project}/>
        )
      })}
    </section>
  )
}

export default ProjectsSection