import React, { useEffect } from 'react'
import skillpng from '../../../assets/images/1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.module.css'

import Typed from '../../../assets/js/typing/typed.js'
const About = () => {

    const typedText = () => {
        return  new Typed('.typingText', {
        strings: ["Freelancer", "Web developer."],
        typeSpeed: 100,
        loop: true,
        showCursor: false,
    });
    }
    useEffect(() => {
        typedText()
    },[])

    return (
        <>
        <div id="about" className={styles.about}>
                <div className={["col-md-12", styles.aboutContainer].join(" ")}>
                    <div className={styles.aboutLeft}>
                        <p className={styles.name}>Bill ZHOU</p>
                        <p className={styles.jobTitle}>Passionate Developer <br/>In New Zealand</p>
                        <p className={styles.role}>I am a growth <span className={['typingText',styles.typedtext].join(" ")}></span></p>
                        <span className={styles.techImg}>
                            <img src={skillpng} alt="skillBrands" />
                        </span>
            </div>
                    <div className={["col-md-12", styles.aboutRight].join(" ")}>
                        <div className={styles.cardBottom}>
                </div>
                        <div className={styles.cardTop}>
                </div>
            </div>
        </div>
         </div>
        </>
    )
}

export default About