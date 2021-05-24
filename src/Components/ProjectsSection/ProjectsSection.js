import React from 'react'
import projectData from '../../projectData'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {

  return(
    <section className='projects-container'>
      <h1>My Projects</h1>
      {projectData.map((project)=>{ 
        return(
          <ProjectCard project={project}/>
        )
      })}
    </section>
  )
}

export default ProjectsSection