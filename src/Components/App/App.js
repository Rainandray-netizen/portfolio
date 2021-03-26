import React from 'react'
import '../../assets/css/styles.css'
// import '../../assets/old-css/styles.css'

import FirstSection from '../FirstSection/FirstSection'
import Transition from '../Transition/Transition'
import SkillsSection from '../SkillsSection/SkillsSection'
import AboutCard from '../AboutCard/AboutCard'
import ProjectsSection from '../ProjectsSection/ProjectsSection'

function App() {
  return (
    <main className='fullwidth sitewrapper'>
      <div className='carbon-background'>
        <FirstSection />
        <Transition>
          <AboutCard />
        </Transition>
      </div>
      <div className='starry-background'>
        <SkillsSection />
        <ProjectsSection />
      </div>
    </ main>
  );
}

export default App;
