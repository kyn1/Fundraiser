import React from 'react'
import Heading from '../layout/Heading.jsx'
import ProjectCard from '../layout/ProjectCard.jsx'
import ChurchDon from '../assets/don_10.png'
import ChurchDon1 from '../assets/don_11.png'
import ChurchDon2 from '../assets/don_12.png'
import ChruchDon3 from '../assets/don_13.png'

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
        <Heading  title1="Our" title2="Project"/>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
            <ProjectCard img={ChurchDon} title="Vision No.1"/>
            <ProjectCard img={ChurchDon1} title="Vision No.2"/>
            <ProjectCard img={ChurchDon2} title="Vision No.2"/>
            <ProjectCard img={ChruchDon3} title="Vision No.3"/>
        </div>
    </div>
  )
}

export default Project
