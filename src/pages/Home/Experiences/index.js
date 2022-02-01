import React, { useEffect } from 'react'
import styles from './index.module.css'

const Experience = () => {

    const experienceDynamic= ()=> {
      var expert = document.querySelector('.exper')
      var expertBox1 = document.querySelector('.experBox1')
      var expertBox2 = document.querySelector('.experBox2')
      var expertBox3 = document.querySelector('.experBox3')
      var experiTop = expert.offsetTop
      window.addEventListener('scroll', function () {
         
          if (window.pageYOffset >= (experiTop/2)) {
            
            //   console.log(window.pageYOffset, experiTop);
          expertBox1.style.opacity = '1.0'
          expertBox2.style.opacity = '1.0'
          expertBox3.style.opacity = '1.0'
        }
      },true)
    }
    
    useEffect(() => {
        experienceDynamic()
    },[])
    return (
        <>
        <div id="experiences" className={styles.experience}>
                <div className={styles.experienceContainer}>
                    <div className={styles.experienceDiscription}>
                <p className={styles.experienceTitle}>Experiences</p>
                <p className={styles.subExperienceTitle}>working period</p>
            </div>
            <div className={[styles.expert, 'exper'].join(" ")}>
                <div className={[styles.expertBox, styles.expertBox1,"experBox1" ].join(" ")}>
                    <div className={styles.year}>2021.4-Current</div>
                    <div className={styles.jobPosition}>Freelancer(New Zealand)</div>
                    <div className={styles.roleDiscrib}> Website optimization | Web development and maintainance</div>
                </div>
                <div className={["experBox2", styles.expertBox, styles.expertBox2].join(" ")}>
                    <div className={styles.year}>2021.2-2021.4</div>
                    <div className={styles.company}>Indevin Ltd(New Zealand)<br/>Lab Technician</div>
                    <div className={styles.roleDiscrib}> Data collection | Statistical analytics | Microsoft 365 maintanance | Trouble shooting for records
                    </div>
                </div>
                <div className={["experBox3", styles.expertBox, styles.expertBox3].join(" ")}>
                    <div className={styles.year}>2009.7-2019.7</div>
                <div className={styles.company}>Hebei University(China)<br/>Assistant Professor</div>
                    <div className={styles.roleDiscrib}>Website updating | Linux teaching | Hardware maintaining | Software installing and uninstalling | Trouble shooting for general using | Customer Q&A
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

    )
}

export default Experience