import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../Common/ProjectCard'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} h3="E Commerce-Website" p="E Commerce App" Link="https://github.com/ajayanbu5322-prog/E-Commerce-Website"/>
            <ProjectCard src={freshBurger} h3="Fresh Burger" p="KFC Restaurant"/>
            <ProjectCard src={hipsster} h3="Hipsster" p="Glasses Shop"/>
            <ProjectCard src={fitLift} h3="FitLift" p="Fitness App"/>
        </div>
    </section>
  )
}

export default Projects