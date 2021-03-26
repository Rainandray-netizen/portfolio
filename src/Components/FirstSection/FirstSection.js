import React from 'react'
import Typist from 'react-typist'

const FirstSection = () => {
  return(
      <section className='content-section banner-header-container'>
        <div className='center-contained'>
          <Typist cursor={{show:false}}>
            <h1 className='title-spacing'>Hi, I'm Ryan, and I love coding!</h1>
            <h2 className='title-spacing'>I'm a full stack developer based in the USA</h2>
          </Typist>
        </div>
      </section>
  )
}

export default FirstSection