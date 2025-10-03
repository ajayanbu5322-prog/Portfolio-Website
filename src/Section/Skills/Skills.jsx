import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-dark.svg'
import checkMarkIconDark from '../../assets/checkmark-light.svg'
import SkillList from '../../Common/SkillList'
import { useTheme } from "../../Common/ThemeContext";

function Skills() {

  const {theme} = useTheme();

    const checkMarkIcon = theme ==='light' ? checkMarkIconDark : checkMarkIconLight;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Tailwind Css"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
    </section>
  )
}

export default Skills