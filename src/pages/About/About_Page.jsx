import React from 'react'
import About from './../../component/About/About.jsx'
import Team from './../../component/Team/Team.jsx'
import Timeline from './../../component/Timeline/Timeline.jsx'
import Features from '../../component/Features/Features.jsx'
import Contact_card from '../../component/Contact/Contact_card'
const About_page = () => {
  return (
    <>
      <About />
      <section className="section _bg">
        <div class="section_heading center">
          <h2> <span>F</span>eatures</h2>
        </div>
        <Features />
      </section>
      

     
    </>
  )
}

export default About_page
